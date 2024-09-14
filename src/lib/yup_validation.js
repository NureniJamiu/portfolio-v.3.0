import * as Yup from 'yup'

export const projectSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    image: Yup.string().nullable(),
    case_study: Yup.string().nullable(),
    tech_stack: Yup.array().of(Yup.string()).nullable(),
    live_url: Yup.string().url('Must be a valid URL').nullable(),
    github_url: Yup.string().url('Must be a valid URL').nullable(),
    status: Yup.string()
        .oneOf(['completed', 'in_progress', 'abandoned'])
        .default('completed'),
})
