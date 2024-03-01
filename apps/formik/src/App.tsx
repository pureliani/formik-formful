import { Formik, Form, useField, Field, FieldProps } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  a: Yup.object({
    b: Yup.object({
      c: Yup.string().required('Required').min(5, 'Must be at least 5 characters'),
    }),
    d: Yup.object({
      e: Yup.string().required('Required').min(10, 'Must be at least 10 characters'),
    }),
  }),
});

const initialValues ={
  a: {
    b: {
      c: ''
    },
    d: {
      e: ''
    }
  }
} satisfies Yup.InferType<typeof validationSchema>

const InputC = () => {
  const [field, meta] = useField("a.b.c")

  return (
    <label className="flex flex-col gap-2 cursor-pointer">
      <h4 className="text-lg font-semibold">Input C</h4>
      <input 
        className="p-2 border border-indigo-600 focus:outline focus:outline-indigo-500" 
        type="text" 
        {...field}
      />
      {meta.error && (
        <h6 className="text-pink-600">{meta.error}</h6>
      )}
    </label>
  )
}


const InputE = () => {
  const [field, meta] = useField("a.d.e")

  return (
    <label className="flex flex-col gap-2 cursor-pointer">
      <h4 className="text-lg font-semibold">Input E</h4>
      <input 
        className="p-2 border border-indigo-600 focus:outline focus:outline-indigo-500" 
        type="text" 
        {...field}
      />
      {meta.error && (
        <h6 className="text-pink-600">{meta.error}</h6>
      )}
    </label>
  )
}

// const InputC = () => {
//   return (
//     <Field name="a.b.c">
//       {({ field, meta }: FieldProps) => (
//         <label className="flex flex-col gap-2 cursor-pointer">
//           <h4 className="text-lg font-semibold">Input C</h4>
//           <input 
//             className="p-2 border border-indigo-600 focus:outline focus:outline-indigo-500" 
//             type="text" 
//             {...field}
//             />
//           {meta.error && (
//             <h6 className="text-pink-600">{meta.error}</h6>
//           )}
//         </label>
//       )}
//     </Field>
//   )
// }

// const InputE = () => {
//   return (
//     <Field name="a.d.e">
//       {({ field, meta }: FieldProps) => (
//         <label className="flex flex-col gap-2 cursor-pointer">
//           <h4 className="text-lg font-semibold">Input E</h4>
//           <input 
//             className="p-2 border border-indigo-600 focus:outline focus:outline-indigo-500" 
//             type="text" 
//             {...field}
//             />
//           {meta.error && (
//             <h6 className="text-pink-600">{meta.error}</h6>
//           )}
//         </label>
//       )}
//     </Field>
//   )
// }

export const App = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async () => {}}
    >
        <Form className="flex flex-col gap-10 p-8">
          <InputC />
          <InputE />
        </Form>
    </Formik>
  );
};





