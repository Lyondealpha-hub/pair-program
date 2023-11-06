import { useForm, SubmitHandler } from 'react-hook-form';
import { CategoryList } from './CategoryList';
import useTodolist from '../../../lib/context/context';

type Inputs = {
    categoryName: string;
};

export const AddCategories = () => {

    const {setCategoryItems, categoryItems} = useTodolist();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        const newCategory = {
            id: Math.floor(Math.random() * 10000),
            name: data.categoryName,
        };

        setCategoryItems({
            categories: [...categoryItems.categories, newCategory],
        });

    };
    

    return (
        <main className='w-1/2 flex flex-col space-y-10'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='categoryName' className='text-lg font-medium'>
                    Category Name
                </label>
                <input
                    type='text'
                    placeholder="Enter Category Name"
                    id='categoryName'
                    className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-slate-500'
                    {...register('categoryName')}
                />
                <p className='text-red-500 text-sm'>{errors.categoryName?.message}</p>
                <button
                    type='submit'
                    className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                >
                    {'Save'}
                </button>
            </form>

            <section className="flex flex-col space-y-4 overflow-y-auto">
                <CategoryList/>
            </section>
        </main>
    )
}
