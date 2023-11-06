import React from 'react'
import useTodolist, { categoryItemProp } from '../../../lib/context/context';
import { CategoryItem } from './CategoryItem';

export const CategoryList = () => {
    const {setCategoryItems, categoryItems} = useTodolist();

  return (
    <main className='flex flex-col space-y-3'>
        {
            categoryItems.categories.map((item:categoryItemProp) => (
                <CategoryItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                />
            ))
        }
    </main>
  )
}
