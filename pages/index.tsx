import axios from "axios";
import { GetServerSideProps } from "next";

import ProfileHeader from "../src/components/ProfileHeader/ProfileHeader";

const data = {
  imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKW_TpB7R9Wd5VV8f1Ckp-JhR8_G_OA-MB-Q&usqp=CAU',
  title: 'test',
  name: 'test',
  breed: 'test',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, velit vel dictum aliquam, est ex condimentum odio, sit amet sodales risus velit a ante. Fusce rutrum quam in vulputate commodo. Nullam vestibulum justo neque.',
  ocupation: 'test'
}

const token = "eb4402f8fa7a31cf2f2f3e05e0513957a9956e0382486dea845845f5bcdd9be7cdc426c210b347c93e39d51f6877432cf7be76875588d6b04a7165fd1b2d210a00675c23347605d8b1ef867f4e9f9956a72c9c5a50363fd4e425cf90b864242396fc85c04d11757756ab15073863fe3ac02b2ae740531b208c8caa097f340d93"

// export default function Home (props : any) {
export default function Home () {
  return (
  <>
    <ProfileHeader {...data}/>
  </>
  )
}

// axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
// export const getServerSideProps : GetServerSideProps = async () => {
//   const data = await axios.get("http://localhost:1337/api/posts")

//   const posts = await data.data

//   return {
//     props: {
//       posts
//     }
//   }
// }
