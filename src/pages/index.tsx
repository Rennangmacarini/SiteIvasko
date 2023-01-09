
import { Banner } from "../components/Banner"
import { ContentOne } from "../components/ContentOne"
import { ContentThree } from "../components/ContentThree"
import { ContentTwo } from "../components/ContentTwo"
import { Video } from "../components/filme"
import { Footer } from "../components/footer"
import { Header } from "../components/Header"


export default function Home(){
  return(
    <> 
    <Header/>
    <Banner />
    <ContentOne />
    <ContentThree/>
    <ContentTwo/>
    <Video/>
    <Footer/>
    </>
  )
}