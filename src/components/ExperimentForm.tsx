import { useState } from 'react'
import type { FormEvent } from 'react'
import type { ExperimentInput } from '../types/experiment'

type ExperimentFormProps = {
    onSubmit: (input: ExperimentInput) => Promise<void>
}

const emptyInput: ExperimentInput = {
    name: '',
    location: '',
    type: '',
    date: '',
    status: 'Planned'
}

function ExperimentForm({ onSubmit }: ExperimentFormProps) {
    const [values, setValues] = useState<ExperimentInput>(emptyInput)
    const [saving, setSaving] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()
        setSaving(true)
        setError(null)
        try {
            await onSubmit(values)
            setValues(emptyInput)
        } catch (err) {
            console.error(err)
            setError('Failed to save experiment')
        } finally {
            setSaving(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Name'
                required
                value={values.name}
                onChange={e => setValues({ ...values, name: e.target.value })}
                />
                <input
                placeholder='Location'
                required
                value={values.location}
                onChange={e => setValues({ ...values, location: e.target.value })}
                />
                <input
                placeholder='Type'
                required
                value={values.type}
                onChange={e => setValues({ ...values, type: e.target.value })}
                />
                <input
                placeholder='Date'
                type='date'
                required
                value={values.date}
                onChange={e => setValues({ ...values, date: e.target.value })}
                />
                <select
                value={values.status}
                onChange={e => setValues({ ...values, status: e.target.value as ExperimentInput['status']})}
                >
                    <option value='Planned'>Planned</option>
                    <option value='InProgress'>In Progress</option>
                    <option value='Completed'>Completed</option>
                </select>
                <button type='submit' disabled={saving}>
                    {saving ? 'Saving...' : 'Save'}
                </button>
                {error && <p>{error}</p>}
            </form>

        )
    }

    export default ExperimentForm


