"use client"

import { TemporalRange } from "@/components/gallery/TemporalRange"
import { getTime } from "@/components/gallery/TimeHook"
import { Loading } from "@/components/global/Loading"
import { useRef, useState } from "react"
import { fetcha } from "./test"
import { upload } from "./upload"

export default function Page() {
  const [file, setFile] = useState("")
  const testRef = useRef(0)
  fetcha()

  function handleChange(event: any) {
    console.log(event.target.files[0])
    if (event.target.files && event.target.files[0]) {
      setFile(URL.createObjectURL(event.target.files[0]))
    }
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <TemporalRange age={"40"} />
      <div className="flex">
        <img src={file} alt="" />
        <button onClick={() => upload(file)}>Upload</button>
      </div>
      <div>
        <ContactForm />
      </div>
      <Loading />
    </div>
  )
}
const ContactForm = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState("")
  const [visible, setvisible] = useState(false)
  const today = new Date().toUTCString()
  console.log(today)
  console.log(getTime(today))

  return (
    <div className="flex flex-col w-[200px] text-black">
      <input
        name="firstName"
        required
        placeholder="first name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <input
        name="age"
        type="number"
        required
        placeholder="age"
        onChange={e => (
          setAge(e.target.valueAsNumber),
          e.target.valueAsNumber >= 14 ? setvisible(true) : setvisible(false)
        )}
        value={age}
      />
      {visible && (
        <input
          name="email"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      )}
    </div>
  )
}

// const [alert, setAlert] = useState(false)
// <button onClick={() => setAlert(true)} className="p-2 rounded-xl bg-blue-600">
//         Alert
//       </button>
//       {alert && <Alert text="testing" close={() => setAlert(false)} />}
//      <LoadingProfile />
