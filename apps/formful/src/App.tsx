import { createForm } from "@gapu/formful"
import { z } from "zod"

const schema = z.object({
  a: z.object({
    b: z.object({
      c: z.string().min(5)
    }),
    d: z.object({
      e: z.string().min(10)
    })
  })
})

const initialState = {
  a: {
    b: {
      c: ""
    },
    d: {
      e: ""
    }
  }
} satisfies z.infer<typeof schema>

const { useField } = createForm({
  initialState,
  schema,
  async onSubmit() { }
})

const InputC = () => {
  const {
    value,
    setValue,
    errors,
    meta,
    setMeta
  } = useField(state => state.a.b.c)

  return (
    <label className="flex flex-col gap-2 cursor-pointer">
      <h4 className="text-lg font-semibold">Input C</h4>
      <input
        className="p-2 border-2 border-indigo-500 focus:outline focus:outline-indigo-500 focus:outline-2"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => setMeta({ touched: true })}
      />
      {meta?.touched && errors.length > 0 && (
        <h6 className="text-pink-500">{errors[0]}</h6>
      )}
    </label>
  )
}


const InputE = () => {
  const {
    value,
    setValue,
    errors,
    meta,
    setMeta
  } = useField(state => state.a.d.e)

  return (
    <label className="flex flex-col gap-2 cursor-pointer">
      <h4 className="text-lg font-semibold">Input E</h4>
      <input
        className="p-2 border-2 border-indigo-500 focus:outline focus:outline-indigo-500 focus:outline-2"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={() => setMeta({ touched: true })}
      />
      {meta?.touched && errors.length > 0 && (
        <h6 className="text-pink-500">{errors[0]}</h6>
      )}
    </label>
  )
}

export const App = () => {
  return (
    <div className="flex flex-col gap-10 p-8">
      <h3 className="text-xl">@gapu/formful</h3>
      <InputC />
      <InputE />
    </div>
  )
}

