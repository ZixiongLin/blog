import Main from "../components/Main"

export default function Layout({
    children
  }:{
    children:React.ReactNode
  }){
    return <Main>
        {children}
    </Main>
  }