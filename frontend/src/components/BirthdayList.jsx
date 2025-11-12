import React from 'react'


export default function BirthdayList({ items = [], onDelete }) {
if (!items.length) return <p className="text-gray-600">No birthdays yet</p>


const fmt = (d) => new Date(d).toLocaleDateString()

return (
<ul className="space-y-2">
{items.map(item => (
<li key={item._id} className="flex items-center justify-between p-3 bg-white rounded shadow-sm">
<div>
<div className="font-medium">{item.name}</div>
<div className="text-sm text-gray-600">{fmt(item.date)} {item.notes ? `• ${item.notes}` : ''}</div>
</div>
<div className="flex items-center gap-2">
<button onClick={() => onDelete(item._id)} className="text-red-500">Delete</button>
</div>
</li>
))}
</ul>
)
}