import { React, useState, useEffect, Badge } from '@monorepo/ui-components';
import { paginator } from './Paginator.module.scss';

const Paginator = ({ onChange }) => {
  const [isPrev, setPrev] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page < 1) {
      setPage(4);
    }
    if (page > 4) {
      setPage(1);
    }
    onChange && onChange(page);
  }, [page]);

  const getStyles = isSelected => {
    return {
      size: 'md',
      colorBackground: isSelected ? '#F65E0A' : '#fff',
      colorBorder: '#F65E0A',
      colorIcon: isSelected ? '#fff' : '#F65E0A',
    };
  };

  return (
    <div className={paginator}>
      <Badge
        name="seta_esq"
        title="Próximo"
        onClick={() => {
          setPrev(true);
          setPage(page - 1);
        }}
        {...getStyles(isPrev)}
      />
      <Badge
        name="seta_dir"
        title="Anterior"
        onClick={() => {
          setPrev();
          setPage(page + 1);
        }}
        {...getStyles(!isPrev)}
      />
    </div>
  );
};

export default Paginator;
