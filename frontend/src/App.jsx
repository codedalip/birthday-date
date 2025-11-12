import React, { useEffect, useState } from 'react'
import api from './api'
import BirthdayForm from './components/BirthdayForm'
import BirthdayList from './components/BirthdayList'


export default function App() {
const [items, setItems] = useState([])
const [loading, setLoading] = useState(true)


const load = async () => {
setLoading(true)
const res = await api.get('/birthdays')
setItems(res.data)
setLoading(false)
}


useEffect(() => { load() }, [])


const add = async (payload) => {
const res = await api.post('/birthdays', payload)
setItems((s) => [res.data, ...s])
}


const remove = async (id) => {
await api.delete(`/birthdays/${id}`)
setItems((s) => s.filter(i => i._id !== id))
}


return (
<div className="max-w-3xl mx-auto p-6">
<h1 className="text-3xl font-bold mb-4">🎂 Birthday Tracker</h1>
<BirthdayForm onAdd={add} />
{loading ? <p>Loading...</p> : <BirthdayList items={items} onDelete={remove} />}
</div>
)
}