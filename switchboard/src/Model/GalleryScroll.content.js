export const galleryScrollContent = (GetThemeStatus, eventImages, weddingImages) => {
    return !GetThemeStatus ? eventImages : weddingImages;
}
