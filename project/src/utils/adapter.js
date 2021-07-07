export const adaptOffersToClient = (offers) => {
  const adaptedOffers = Object.assign(
    {},
    offers,
    {
      previewImage: offers.preview_image,
      isFavorite: offers.is_favorite,
      isPremium: offers.is_premium,
      maxAdults: offers.max_adults,
      host: Object.assign(
        {},
        offers.host,
        {
          isPro: offers.host.is_pro,
          avatarUrl: offers.host.avatar_url,
        },
      ),
    },
  );

  delete adaptedOffers.preview_image;
  delete adaptedOffers.is_favorite;
  delete adaptedOffers.is_premium;
  delete adaptedOffers.max_adults;
  delete adaptedOffers.host.is_pro;
  delete adaptedOffers.host.avatar_url;

  return adaptedOffers;
};
