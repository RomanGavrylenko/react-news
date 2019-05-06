import React from 'react';

const NewsFilterView = (props) => {

    const { handleCategory, handleCount, category, 
            count, isOpen, toggleOpen, items } = props;

    const getCount = (handleCount, count) => {

        const arr = [10, 20, 50];
        let countList = arr.map(num => {
            let cls;
            if (num === count) {
                cls = 'filters__count-button button filters__count-button_active';
            } else {
                cls = 'filters__count-button button';
            }

            return (
                <button
                    key={num}
                    className={cls}
                    data-count={num}
                    onClick={handleCount}
                >
                    {num}
                </button>
            );
        });

        return countList;
    }

    const getCategory = (handleCategory, category, items) => {

        let categoryList = items.map(item => {
            let cls;
            if (item.attr === category) {
                cls = 'filters__category-item filters__category-item_active text';
            } else {
                cls = 'filters__category-item text';
            }
            return (
                <div
                    className={cls}
                    onClick={handleCategory}
                    data-item={item.attr}
                >
                    {item.name}
                </div>
            );
        });

        return categoryList;

    }

    return (
        <div className='filters'>
            <h5
                className='filters__title filters__title_clickable text'
                onClick={toggleOpen}
            >
                Фильтры для новостей
            </h5>
            {isOpen &&
                <React.Fragment>
                    <div className='filters__count'>
                        <p className='filters__text text'>
                            Кол-во новостей:
                    </p>
                        <div className='filters__count-block'>
                            {getCount(handleCount, count)}
                        </div>
                    </div>
                    <div className='filters__category'>
                        <p className='filters__text text'>
                            Категории:
                    </p>
                        {getCategory(handleCategory, category, items)}
                    </div>
                </React.Fragment>
            }
            <div className='filters__show'>
                <button
                    className='button filters__button'
                    onClick={toggleOpen}
                >
                    {isOpen ? 'Скрыть' : "Показать"}
                </button>
            </div>
        </div>
    )
}

export default NewsFilterView;