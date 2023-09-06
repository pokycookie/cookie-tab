import Calendar from './components/calendar/calendar'
import Favicon from './components/ui/favicon'
import LabelInput from './components/ui/labelInput'
import useInput from './hooks/useInput'

export default function App() {
  const [url, setUrl] = useInput()

  return (
    <>
      <main className="h-screen p-10 w-vw">
        <div className="w-96 h-96">
          <Calendar />
        </div>
        <div>
          <LabelInput value={url} onChange={setUrl} lable="url" />
          <Favicon url={url} />
        </div>
      </main>
    </>
  )
}
