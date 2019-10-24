import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  isEmpty,
  chunk,
} from 'lodash';
import '../../styles/Playlists.scss';
import Pagination from '../Generic/Pagination/Pagination';
import {
  PAGINATION_CONTROLS,
  PLAYLISTS,
} from '../Generic/Pagination/config';

const { LIMIT } = PLAYLISTS;

function getChunkedItems(currentPage, items = []) {
  if (isEmpty(items)) {
    return [];
  }
  return chunk(items, LIMIT)[currentPage - 1];
}
const Playlists = ({ playlists }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [chunkedItems, setChunkedItems] = useState([]);
  const [totalPages] = useState(Math.ceil(playlists.length / LIMIT));
  const [selectedPlaylistIndex, setSelectedPlaylistIndex] = useState(null);

  useEffect(() => {
    const chunked = getChunkedItems(currentPage, playlists);
    setChunkedItems(chunked);
  }, []);

  const onPaginationClick = (e, page) => {
    e.preventDefault();
    let newPage = page;

    if (currentPage !== newPage) {
      if (newPage === PAGINATION_CONTROLS.NEXT) {
        newPage = currentPage + 1;
      } else if (newPage === PAGINATION_CONTROLS.PREVIOUS) {
        newPage = currentPage - 1;
      }
    }

    setCurrentPage(newPage);
    setChunkedItems(getChunkedItems(newPage, playlists));
  };

  const onPlaylistClick = (e, i) => {
    if (selectedPlaylistIndex === i) {
      setSelectedPlaylistIndex(null);
    } else {
      setSelectedPlaylistIndex(i);
    }
  };

  return (
    <div className="left-column">
      <h2 className="header">Your Spotify Playlists</h2>
      <div className="playlists-container">
        {chunkedItems.map((p, i) => {
          const index = (currentPage - 1) * LIMIT + i;
          return (
            <div
              key={i}
              className={cn('playlist', {
                selected: index === selectedPlaylistIndex,
              })}
              onClick={(e) => onPlaylistClick(e, index)}
            >
              <span className="name">{p.name}</span>
            </div>
          );
        })}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          showEllipses={false}
          handleClick={onPaginationClick}
        />
      </div>
    </div>
  );
};

Playlists.defaultProps = {
  playlists: [],
};

Playlists.propTypes = {
  playlists: PropTypes.array,
};

export default Playlists;
