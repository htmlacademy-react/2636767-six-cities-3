interface FavButtonProps {
  isFav: boolean;
  blockName: string;
}

function FavButton({ blockName, isFav }: FavButtonProps) {
  return (
    <button
      className={`${blockName}__bookmark-button ${
        isFav && `${blockName}__bookmark-button--active`
      }  button`}
      type='button'
    >
      <svg className={`${blockName}__bookmark-icon`} width='31' height='33'>
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>{isFav ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default FavButton;
