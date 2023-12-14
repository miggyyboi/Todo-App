function FilterButton({ setFilterId }) {
  const universalStyling = 'transition-transform hover:scale-105';

  return (
    <>
      <button onClick={() => setFilterId('all')} className={universalStyling}>
        All
      </button>
      <button
        onClick={() => setFilterId('active')}
        className={universalStyling}
      >
        Active
      </button>
      <button
        onClick={() => setFilterId('completed')}
        className={universalStyling}
      >
        Completed
      </button>
    </>
  );
}

export default FilterButton;
