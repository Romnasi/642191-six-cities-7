export const adaptOfferToClient = (offer) => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      previewImage: offer.preview_image,
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      host: Object.assign(
        {},
        offer.host,
        {
          isPro: offer.host.is_pro,
          avatarUrl: offer.host.avatar_url,
        },
      ),
    },
  );

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};


export const adaptCommentToClient = (comment) => {
  const adaptComment = Object.assign(
    {},
    comment,
    {
      user: Object.assign(
        {},
        comment.user,
        {
          avatarUrl: comment.user.avatar_url,
          isPro: comment.user.is_pro,
        },
      ),
    },
  );

  delete adaptComment.user.avatar_url;
  delete adaptComment.user.is_pro;

  return adaptComment;
};


// export const adaptFavoriteStatusToClient = (comment) => {
//   const adaptComment = Object.assign(
//     {},
//     comment,
//     {
//       user: Object.assign(
//         {},
//         comment.user,
//         {
//           avatarUrl: comment.user.avatar_url,
//           isPro: comment.user.is_pro,
//         },
//       ),
//     },
//   );
//
//   delete adaptComment.user.avatar_url;
//   delete adaptComment.user.is_pro;
//
//   return adaptComment;
// };
