import  { FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader'

interface EmptyProps {}

const Empty: FC<EmptyProps> = () =>{
  return (
    <Fragment>
      <Pageheader currentpage="Empty" activepage="Pages" mainpage="Empty" />

    </Fragment>
  )
}

export default Empty