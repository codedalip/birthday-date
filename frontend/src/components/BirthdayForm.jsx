import React, { useState } from 'react'


export default function BirthdayForm({ onAdd }) {
const [name, setName] = useState('')
const [date, setDate] = useState('')
const [notes, setNotes] = useState('')


const submit = async (e) => {
e.preventDefault()
if (!name || !date) return alert('name + date required')
await onAdd({ name, date, notes })
setName(''); setDate(''); setNotes('')
}


return (
<form onSubmit={submit} className="mb-6">
<div className="flex gap-2">
<input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="flex-1 p-2 border rounded" />
<input value={date} onChange={e=>setDate(e.target.value)} type="date" className="p-2 border rounded" />
<button className="px-4 rounded bg-blue-600 text-white">Add</button>
</div>
<div className="mt-2">
<input value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Notes (optional)" className="w-full p-2 border rounded" />
</div>
</form>
)
}