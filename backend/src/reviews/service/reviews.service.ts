import * as reviewsRepository from '../repository/reviews.repository';
import * as errorCheck from './utils/errorCheck';

export const createReviews = async (userId: number, bookInfoId: number, content: string) => {
  await reviewsRepository.createReviews(userId, bookInfoId, content);
};

export const getReviewsPage = async (
  titleOrNickname: string,
  disabled: number,
  page: number,
  sort: 'asc' | 'desc',
) => {
  const items = await reviewsRepository.getReviewsPage(titleOrNickname, disabled, page, sort);
  const counts = await reviewsRepository.getReviewsCounts(titleOrNickname, disabled);
  const meta = {
    totalItems: counts,
    itemsPerPage: 10,
    totalPages: parseInt(String(counts / 10 + 1), 10),
    firstPage: page === 0,
    finalPage: page === parseInt(String(counts / 10), 10),
    currentPage: page,
  };
  return { items, meta };
};

export const getReviewsUserId = async (
  reviewsId : number,
) => {
  const reviewsUserId = await reviewsRepository.getReviewsUserId(reviewsId);
  return reviewsUserId;
};

export const updateReviews = async (
  reviewsId : number,
  userId : number,
  content : string,
) => {
  const reviewsUserId = await errorCheck.updatePossibleCheck(reviewsId);
  errorCheck.idAndTokenIdSameCheck(reviewsUserId, userId);
  await reviewsRepository.updateReviews(reviewsId, userId, content);
};

export const deleteReviews = async (reviewId: number, deleteUser: number) => {
  await reviewsRepository.deleteReviews(reviewId, deleteUser);
};

export const patchReviews = async (
  reviewsId : number,
  userId : number,
) => {
  await reviewsRepository.patchReviews(reviewsId, userId);
};
