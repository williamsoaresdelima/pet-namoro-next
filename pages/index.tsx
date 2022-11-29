import ProfileHeader from "../src/components/ProfileHeader/ProfileHeader";

const data = {
  imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKW_TpB7R9Wd5VV8f1Ckp-JhR8_G_OA-MB-Q&usqp=CAU',
  title: 'test',
  name: 'test',
  breed: 'test',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius, velit vel dictum aliquam, est ex condimentum odio, sit amet sodales risus velit a ante. Fusce rutrum quam in vulputate commodo. Nullam vestibulum justo neque.',
  ocupation: 'test'
}

export default function Home () {
  return <ProfileHeader {...data}/>
}