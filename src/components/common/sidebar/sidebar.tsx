import  { Fragment, useState, useEffect, FC } from "react";
import { connect } from "react-redux";
import SimpleBar from 'simplebar-react';
import { MenuItems } from "./nav";
import store from "../../../redux/store";
import { Link, useLocation } from "react-router-dom";
import { ThemeChanger } from "../../../redux/action";
// import SpkButton from "../../../@spk/uielements/spk-button";
// import SpkOverlay from "../../../@spk/uielements/spk-overlay";

interface SidebarProps { }

const Sidebar: FC<SidebarProps> = ({ local_varaiable, ThemeChanger }: any) => {
	const [menuitems, setMenuitems] = useState(MenuItems);
	const [userRole, setUserRole] = useState("");
	const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
	const normalizedRole = (userRole || "").toLowerCase();
	const isStaffRole = normalizedRole === "staff" || normalizedRole === "stuff";
	const isCorporateRole = normalizedRole === "corporate";
	const staffHiddenMenuTitles = new Set([
		"Moola Plus",
		"Transaction Details",
		"Register Application",
		"Auto Settlement",
		"Report",
		"User Management",
		"Dispute Page",
		"My Account",
		"LOGS & CHARTS",
		"Transactions",
		"Charts",
	]);
	const isStaffDisabledItem = (title?: string, menutitle?: string) => {
		if (!isStaffRole) return false;
		return staffHiddenMenuTitles.has(title || menutitle || "");
	};
	const corporateMenuWhitelist = new Set([
		"Analytics",
		"Dashboards",
		"MOOLA",
		"Dashboard",
		"Transaction Details",
		"Register Application",
		"Auto Settlement",
		"Report",
		"Dispute Page",
		"My Account",
	]);

const toggleMenu = (index: number) => {
  setOpenMenus((prev) => ({
    ...prev,
    [index]: !prev[index], // Toggle the submenu open/close
  }));
};
	// const [role, setRole] = useState("");
  // Declare filtered menu items once
// Filter the menu items based on user role
let filteredMenuItems = MenuItems.map((item: any) => {
	if (isStaffRole) {
		return item;
	}

	if (isCorporateRole && !corporateMenuWhitelist.has(item.title || item.menutitle)) {
		return null;
	}

	if (item.type === "sub") {
		const filteredChildren = item.children?.filter((child: any) => {
			if (isStaffRole) {
				return true;
			}

			if (isCorporateRole) {
				return !child.roles || child.roles.some((role: string) => role.toLowerCase() === "corporate");
			}

			return !child.roles || child.roles.some((role: string) => role.toLowerCase() === normalizedRole);
		});

		if (!filteredChildren || filteredChildren.length === 0) return null;

		return { ...item, children: filteredChildren };
	}

	if (isCorporateRole) {
		return !item.roles || item.roles.some((role: string) => role.toLowerCase() === "corporate") ? item : null;
	}

	return !item.roles || item.roles.some((role: string) => role.toLowerCase() === normalizedRole) ? item : null;
}).filter(Boolean); // Remove null values
	useEffect(() => {
		
		const storedData = localStorage.getItem("userData");
  
		if (storedData) {
			const parsedData = JSON.parse(storedData);
			const role = String(parsedData?.role || "").toLowerCase();
  
			//setData(JSON.parse(storedData));
		  
			
		    setUserRole(role === "stuff" ? "Staff" : parsedData.role)
		}
		
	}, []);

	function closeMenu() {
		const closeMenudata = (items: any) => {
			items?.forEach((item: any) => {
				item.active = false;
				closeMenudata(item.children);
			});
		};
		closeMenudata(MenuItems);
		setMenuitems((arr: any) => [...arr]);
	}

	useEffect(() => {

		window.addEventListener('resize', menuResizeFn);
		window.addEventListener('resize', checkHoriMenu);
		const mainContent = document.querySelector(".main-content");
		if (window.innerWidth <= 992) {
			if (mainContent) {
				const theme = store.getState();
				ThemeChanger({ ...theme, dataToggled: "close" });
			}
			else if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal') {
				closeMenu();
			}
		}
		mainContent!.addEventListener('click', menuClose);
		return () => {
			window.removeEventListener("resize", menuResizeFn);
			window.removeEventListener('resize', checkHoriMenu);
		};
	}, []);

	// const router = useRouter();
	// const pathname = usePathname()
	const location = useLocation();

	function Onhover() {

		const theme = store.getState();
		if ((theme.dataToggled == 'icon-overlay-close' || theme.dataToggled == 'detached-close') && theme.iconOverlay != 'open') {
			ThemeChanger({ ...theme, "iconOverlay": "open" });
		}
	}
	function Outhover() {

		const theme = store.getState();
		if ((theme.dataToggled == 'icon-overlay-close' || theme.dataToggled == 'detached-close') && theme.iconOverlay == 'open') {
			ThemeChanger({ ...theme, "iconOverlay": "" });
		}
	}

	function menuClose() {
		const theme = store.getState();
		if (window.innerWidth <= 992) {
			ThemeChanger({ ...theme, dataToggled: "close" });
		}
		const overlayElement = document.querySelector("#responsive-overlay") as HTMLElement | null;
		if (overlayElement) {
			overlayElement.classList.remove("active");
		}
		if (theme.dataNavLayout == "horizontal" || theme.dataNavStyle == "menu-click" || theme.dataNavStyle == "icon-click") {
			closeMenu();
		}
	}

	const WindowPreSize = typeof window !== 'undefined' ? [window.innerWidth] : [];

	function menuResizeFn() {

		if (typeof window === 'undefined') {
			// Handle the case where window is not available (server-side rendering)
			return;
		}

		WindowPreSize.push(window.innerWidth);
		if (WindowPreSize.length > 2) { WindowPreSize.shift() }

		const theme = store.getState();
		const currentWidth = WindowPreSize[WindowPreSize.length - 1];
		const prevWidth = WindowPreSize[WindowPreSize.length - 2];


		if (WindowPreSize.length > 1) {
			if (currentWidth < 992 && prevWidth >= 992) {
				// less than 992;
				ThemeChanger({ ...theme, dataToggled: "close" });
			}

			if (currentWidth >= 992 && prevWidth < 992) {
				// greater than 992
				ThemeChanger({ ...theme, dataToggled: theme.dataVerticalStyle === "doublemenu" ? "double-menu-open" : "" });

			}
		}
	}

	function switcherArrowFn(): void {

		// Used to remove is-expanded class and remove class on clicking arrow buttons
		function slideClick(): void {
			const slide = document.querySelectorAll<HTMLElement>(".slide");
			const slideMenu = document.querySelectorAll<HTMLElement>(".slide-menu");

			slide.forEach((element) => {
				if (element.classList.contains("is-expanded")) {
					element.classList.remove("is-expanded");
				}
			});

			slideMenu.forEach((element) => {
				if (element.classList.contains("open")) {
					element.classList.remove("open");
					element.style.display = "none";
				}
			});
		}

		slideClick();
	}

	const checkHoriMenu = () => {
		const menuNav = document.querySelector(".main-menu") as HTMLElement;
		const mainContainer1 = document.querySelector(".main-sidebar") as HTMLElement;

		const marginLeftValue = Math.ceil(
			Number(window.getComputedStyle(menuNav).marginLeft.split("px")[0])
		);
		const marginRightValue = Math.ceil(
			Number(window.getComputedStyle(menuNav).marginRight.split("px")[0])
		);
		const check = menuNav.scrollWidth - mainContainer1.offsetWidth;

		// Show/Hide the arrows
		if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
		} else {
			menuNav.style.marginLeft = "0px";
			menuNav.style.marginRight = "0px";
			menuNav.style.marginInlineStart = "0px";
		}

		if (!(document.querySelector("html")?.getAttribute("dir") === "rtl")) {
			// LTR check the width and adjust the menu in screen
			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (Math.abs(check) < Math.abs(marginLeftValue)) {
					menuNav.style.marginLeft = -check + "px";
				}
			}

		} else {
			// RTL check the width and adjust the menu in screen
			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (Math.abs(check) < Math.abs(marginRightValue)) {
					menuNav.style.marginRight = -check + "px";
				}
			}

		}

	};

	function slideRight(): void {
		const menuNav = document.querySelector<HTMLElement>(".main-menu");
		const mainContainer1 = document.querySelector<HTMLElement>(".main-sidebar");

		if (menuNav && mainContainer1) {
			const marginLeftValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
			);
			const marginRightValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
			);
			const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
			let mainContainer1Width = mainContainer1.offsetWidth;

			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
					if (Math.abs(check) > Math.abs(marginLeftValue)) {
						menuNav.style.marginInlineEnd = "0";

						if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
							const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
						if (slideRightButton) {
							slideRightButton.classList.remove("hidden");
						}
					}
				} else {
					if (Math.abs(check) > Math.abs(marginRightValue)) {
						menuNav.style.marginInlineEnd = "0";

						if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
							const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						const slideLeftButton = document.querySelector<HTMLElement>("#slide-left");
						if (slideLeftButton) {
							slideLeftButton.classList.remove("hidden");
						}
					}
				}
			}

			const element = document.querySelector<HTMLElement>(".main-menu > .slide.open");
			const element1 = document.querySelector<HTMLElement>(".main-menu > .slide.open > ul");
			if (element) {
				element.classList.remove("active");
			}
			if (element1) {
				element1.style.display = "none";
			}
		}

		switcherArrowFn();
		checkHoriMenu();
	}

	function slideLeft(): void {
		const menuNav = document.querySelector<HTMLElement>(".main-menu");
		const mainContainer1 = document.querySelector<HTMLElement>(".main-sidebar");

		if (menuNav && mainContainer1) {
			const marginLeftValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
			);
			const marginRightValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
			);
			const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
			let mainContainer1Width = mainContainer1.offsetWidth;

			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
					if (Math.abs(check) <= Math.abs(marginLeftValue)) {
						menuNav.style.marginInlineStart = "0px";
					}
				} else {
					if (Math.abs(check) > Math.abs(marginRightValue)) {
						menuNav.style.marginInlineStart = "0";

						if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
							const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						const slideLeftButton = document.querySelector<HTMLElement>("#slide-left");
						if (slideLeftButton) {
							slideLeftButton.classList.remove("hidden");
						}
					}
				}
			}

			const element = document.querySelector<HTMLElement>(".main-menu > .slide.open");
			const element1 = document.querySelector<HTMLElement>(".main-menu > .slide.open > ul");
			if (element) {
				element.classList.remove("active");
			}
			if (element1) {
				element1.style.display = "none";
			}
		}

		switcherArrowFn();
	}

	const Topup = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
				const Scolls = document.querySelectorAll(".app-sidebar");
				Scolls.forEach((e) => {
					e.classList.add("sticky-pin");
				});
			} else {
				const Scolls = document.querySelectorAll(".app-sidebar");
				Scolls.forEach((e) => {
					e.classList.remove("sticky-pin");
				});
			}
		}
	};
	if (typeof window !== 'undefined') {
		window.addEventListener("scroll", Topup);
	}


	let hasParent = false;
	let hasParentLevel = 0;

	function setSubmenu(event: any, targetObject: any, MenuItems = menuitems) {
		const theme = store.getState();
		if ((window.screen.availWidth <= 992 || theme.dataNavStyle != "icon-hover") && (window.screen.availWidth <= 992 || theme.dataNavStyle != "menu-hover")) {
		if (!event?.ctrlKey) {
			for (const item of MenuItems) {
				if (item === targetObject) {
					item.active = true;
					item.selected = true;
					setMenuAncestorsActive(item);
				} else if (!item.active && !item.selected) {
					item.active = false; // Set active to false for items not matching the target
					item.selected = false; // Set active to false for items not matching the target
				} else {
					removeActiveOtherMenus(item);
				}
				if (item.children && item.children.length > 0) {
					setSubmenu(event, targetObject, item.children);
				}
			}
		}
	}
		setMenuitems((arr: any) => [...arr]);
	}

	function getParentObject(obj: any, childObject: any) {
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (typeof obj[key] === 'object' && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
					return obj; // Return the parent object
				}
				if (typeof obj[key] === 'object') {
					const parentObject: any = getParentObject(obj[key], childObject);
					if (parentObject !== null) {
						return parentObject;
					}
				}
			}
		}
		return null; // Object not found
	}

	function setMenuAncestorsActive(targetObject: any) {
		const parent = getParentObject(menuitems, targetObject);
		const theme = store.getState();
		if (parent) {
			if (hasParentLevel > 2) {
				hasParent = true;
			}
			parent.active = true;
			parent.selected = true;
			hasParentLevel += 1;
			setMenuAncestorsActive(parent);
		}
		else if (!hasParent) {
			if (theme.dataVerticalStyle == 'doublemenu') {
				ThemeChanger({ ...theme, dataToggled: "double-menu-close" });
			}
		}
	}

	function removeActiveOtherMenus(item: any) {
		if (item) {
			if (Array.isArray(item)) {
				for (const val of item) {
					val.active = false;
					val.selected = false;
				}
			}
			item.active = false;
			item.selected = false;

			if (item.children && item.children.length > 0) {
				removeActiveOtherMenus(item.children);
			}
		}
		else {

		}
	}

	function setMenuUsingUrl(currentPath: any) {
		hasParent = false;
		hasParentLevel = 1;
		// Check current url and trigger the setSidemenu method to active the menu.
		const setSubmenuRecursively = (items: any) => {

			items?.forEach((item: any) => {
				if (item.path == '') { }
				else if (item.path === currentPath) {
					setSubmenu(null, item);
				}
				setSubmenuRecursively(item.children);
			});
		};
		setSubmenuRecursively(MenuItems);
	}
	const [previousUrl, setPreviousUrl] = useState("/");

	useEffect(() => {

		// Select the target element
		const targetElement = document.documentElement;

		// Create a MutationObserver instance
		const observer = new MutationObserver(handleAttributeChange);

		// Configure the observer to watch for attribute changes
		const config = { attributes: true };

		// Start observing the target element
		observer.observe(targetElement, config);
		let currentPath = location.pathname.endsWith("/") ? location.pathname.slice(0, -1) : location.pathname;
		if (currentPath !== previousUrl) {
			setMenuUsingUrl(currentPath);
			setPreviousUrl(currentPath);
		}
	}, [location]);

	function toggleSidemenu(event: any, targetObject: any, MenuItems = menuitems) {
		const theme = store.getState();
		let element = event.target;
		if ((theme.dataNavStyle != "icon-hover" && theme.dataNavStyle != "menu-hover") || (window.innerWidth < 992) || (theme.dataNavLayout != "horizontal") && (theme.dataToggled != "icon-hover-closed" && theme.dataToggled != "menu-hover-closed")) {
			// {
			for (const item of MenuItems) {
				if (item === targetObject) {
					if (theme.dataVerticalStyle == 'doublemenu' && item.active) { return; }
					item.active = !item.active;

					if (item.active) {
						closeOtherMenus(MenuItems, item);
					} else {
						if (theme.dataVerticalStyle == 'doublemenu') {
							ThemeChanger({ ...theme, dataToggled: "double-menu-close" });
						}
					}
					setAncestorsActive(MenuItems, item);

				}
				else if (!item.active) {
					if (theme.dataVerticalStyle != 'doublemenu') {
						item.active = false; // Set active to false for items not matching the target
					}
				}
				if (item.children && item.children.length > 0) {
					toggleSidemenu(event, targetObject, item.children);
				}
			}
			if (targetObject?.children && targetObject.active) {
				if (theme.dataVerticalStyle == 'doublemenu' && theme.dataToggled != 'double-menu-open') {
					ThemeChanger({ ...theme, dataToggled: "double-menu-open" });
				}
			}
			if (element && theme.dataNavLayout == 'horizontal' && (theme.dataNavStyle == 'menu-click' || theme.dataNavStyle == 'icon-click')) {
				const listItem = element.closest("li");
				if (listItem) {
					// Find the first sibling <ul> element
					const siblingUL = listItem.querySelector("ul");
					let outterUlWidth = 0;
					let listItemUL = listItem.closest('ul:not(.main-menu)');
					while (listItemUL) {
						listItemUL = listItemUL.parentElement.closest('ul:not(.main-menu)');
						if (listItemUL) {
							outterUlWidth += listItemUL.clientWidth;
						}
					}
					if (siblingUL) {
						// You've found the sibling <ul> element
						let siblingULRect = listItem.getBoundingClientRect();
						if (theme.dir == 'rtl') {
							if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
								targetObject.dirchange = true;
							} else {
								targetObject.dirchange = false;
							}
						} else {
							if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
								targetObject.dirchange = true;
							} else {
								targetObject.dirchange = false;
							}
						}
					}
				}
			}
		}
		setMenuitems((arr: any) => [...arr]);
	}

	function setAncestorsActive(MenuItems: any, targetObject: any) {
		const theme = store.getState();
		const parent = findParent(MenuItems, targetObject);
		if (parent) {
			parent.active = true;
			if (parent.active) {
				ThemeChanger({ ...theme, dataToggled: "double-menu-open" });
			}

			setAncestorsActive(MenuItems, parent);
		} else {
			if (theme.dataVerticalStyle == "doublemenu") {
				ThemeChanger({ ...theme, dataToggled: "double-menu-close" });
			}

		}
	}
	function closeOtherMenus(MenuItems: any, targetObject: any) {
		for (const item of MenuItems) {
			if (item !== targetObject) {
				item.active = false;
				if (item.children && item.children.length > 0) {
					closeOtherMenus(item.children, targetObject);
				}
			}
		}
	}
	function findParent(MenuItems: any, targetObject: any) {
		for (const item of MenuItems) {
			if (item.children && item.children.includes(targetObject)) {
				return item;
			}
			if (item.children && item.children.length > 0) {
				const parent: any = findParent(MenuItems = item.children, targetObject);
				if (parent) {
					return parent;
				}
			}
		}
		return null;
	}

	function HoverToggleInnerMenuFn(event: any, item: any) {
		const theme = store.getState();
		let element = event.target;
		if (element && theme.dataNavLayout == "horizontal" && (theme.dataNavStyle == "menu-hover" || theme.dataNavStyle == "icon-hover")) {
			const listItem = element.closest("li");
			if (listItem) {
				// Find the first sibling <ul> element
				const siblingUL = listItem.querySelector("ul");
				let outterUlWidth = 0;
				let listItemUL = listItem.closest("ul:not(.main-menu)");
				while (listItemUL) {
					listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
					if (listItemUL) {
						outterUlWidth += listItemUL.clientWidth;
					}
				}
				if (siblingUL) {
					// You've found the sibling <ul> element
					let siblingULRect = listItem.getBoundingClientRect();
					if (theme.dir == "rtl") {
						if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
							item.dirchange = true;
						} else {
							item.dirchange = false;
						}
					} else {
						if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
							item.dirchange = true;
						} else {
							item.dirchange = false;
						}
					}
				}
			}
		}
	}
	void HoverToggleInnerMenuFn;
	void toggleSidemenu;
	function handleAttributeChange(mutationsList: any) {
		for (const mutation of mutationsList) {
			if (mutation.type === 'attributes' && mutation.attributeName === 'data-nav-layout') {
				const newValue = mutation.target.getAttribute('data-nav-layout');
				if (newValue == 'vertical') {
					let currentPath = location.pathname.endsWith("/") ? location.pathname.slice(0, -1) : location.pathname;
					currentPath = !currentPath ? '/dashboards/collections' : currentPath;
					setMenuUsingUrl(currentPath);
				} else {
					closeMenu();
				}
			}
		}
	}
	// const handleClick = (event:any) => {
	// 	// Your logic here
	// 	event.preventDefault(); // Prevents the default anchor behavior (navigation)
	// 	// ... other logic you want to perform on click
	// };



	return (

		<Fragment>
			 
			<div id="responsive-overlay"
				onClick={() => { menuClose(); }}></div>
			<aside className="app-sidebar border-r border-gray-200 dark:border-defaultborder/10 bg-white dark:!bg-bodybg" id="sidebar" onMouseOver={() => Onhover()}
				onMouseLeave={() => Outhover()}>
				<div className="main-sidebar-header px-6 py-6 border-b border-gray-200 dark:border-defaultborder/10">
					<Link to={`${import.meta.env.BASE_URL}dashboards/corporate/`} className="header-logo sidebar-brand-link flex items-center gap-3 group">
						<div className="w-10 h-10 bg-gradient-to-br from-primary via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
							<span className="text-white text-xl font-extrabold leading-none tracking-tight">M</span>
						</div>
						<div className="min-w-0 sidebar-brand-text">
							<h1 className="text-sm sm:text-lg font-bold text-primary dark:text-white tracking-tight leading-tight truncate">MoolaCore</h1>
							<p className="text-[10px] sm:text-xs text-gray-500 dark:text-white/50 -mt-0.5 truncate">Financial Dashboard</p>
						</div>
					</Link>
				</div>

				<SimpleBar className="main-sidebar px-3 py-4" id="sidebar-scroll">
						<nav className="main-menu-container nav nav-pills flex-column sub-open">
							<div className="slide-left" id="slide-left" onClick={() => { slideLeft(); }}><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24"
								height="24" viewBox="0 0 24 24">
								<path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
							</svg></div>
						<ul className="main-menu space-y-1">
    {filteredMenuItems.map((levelone: any, index: number) => (
      <Fragment key={index}>
        <li
          className={`${
            levelone.menutitle ? "slide__category" : ""
          } ${
            levelone.type === "link" ? "slide" : ""
          } ${
            levelone.type === "sub" ? "slide has-sub" : ""
          } ${
            openMenus[index] ? "open" : ""
          } ${
            levelone.selected ? "active" : ""
          }`}
        >
          {levelone.menutitle && (
            <span className="category-name text-xs font-semibold text-gray-400 dark:text-white/40 uppercase tracking-wider px-4 py-3 block">
              {levelone.menutitle}
            </span>
          )}

          {/* Link Menu Item */}
          {levelone.type === "link" && (
            <Link
							to={isStaffDisabledItem(levelone.title, levelone.menutitle) ? "#" : levelone.path + "/"}
							onClick={(event) => {
								if (isStaffDisabledItem(levelone.title, levelone.menutitle)) {
									event.preventDefault();
								}
							}}
              className={`side-menu__item flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-white/70 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-600/10 hover:text-primary dark:hover:text-primary transition-all group ${
                levelone.selected ? "bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white shadow-md" : ""
							} ${
								isStaffDisabledItem(levelone.title, levelone.menutitle) ? "opacity-50 pointer-events-none cursor-not-allowed" : ""
              }`}
            >
              <span className={`text-lg ${levelone.selected ? "text-white" : "text-gray-500 group-hover:text-primary dark:group-hover:text-primary transition-colors"}`}>
                {levelone.icon}
              </span>
              <span className="side-menu__label font-medium">{levelone.title}</span>
              {levelone.badge && (
                <span className="ml-auto px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                  {levelone.badge}
                </span>
              )}
            </Link>
          )}

          {/* Submenu Toggle */}
          {levelone.type === "sub" && (
            <>
              <button
                className={`side-menu__item w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-white/70 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-600/10 hover:text-primary dark:hover:text-primary transition-all group ${
                  levelone.selected ? "bg-gradient-to-r from-primary/20 to-purple-600/20 text-primary" : ""
								} ${
									isStaffDisabledItem(levelone.title, levelone.menutitle) ? "opacity-50 cursor-not-allowed" : ""
                }`}
								onClick={() => {
									if (isStaffDisabledItem(levelone.title, levelone.menutitle)) return;
									toggleMenu(index);
								}}
								disabled={isStaffDisabledItem(levelone.title, levelone.menutitle)}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${levelone.selected ? "text-primary" : "text-gray-500 group-hover:text-primary dark:group-hover:text-primary transition-colors"}`}>
                    {levelone.icon}
                  </span>
                  <span className="side-menu__label font-medium">{levelone.title}</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openMenus[index] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMenus[index] && (
                <ul className="sub-menu pl-4 mt-1 space-y-1">
                  {levelone.children.map((child: any, subIndex: number) => (
                    <li key={subIndex}>
                      <Link
                        to={child.path + "/"}
                        className="side-menu__item flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 dark:text-white/60 hover:bg-primary/5 hover:text-primary dark:hover:text-primary transition-all"
                      >
                        {child.icon && <span className="text-base">{child.icon}</span>}
                        <span className="side-menu__label">{child.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      </Fragment>
    ))}
  </ul>
							<div className="slide-right" onClick={() => { slideRight(); }} id="slide-right">
								<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
							</div>
						</nav>
				</SimpleBar>
			</aside>
		</Fragment>
	);
};

const mapStateToProps = (state: any) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Sidebar);
