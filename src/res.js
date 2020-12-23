const documentStyle = getComputedStyle(document.body);

const colorPrimary = documentStyle.getPropertyValue("--color-primary");
const colorPrimaryVariant = documentStyle.getPropertyValue("--color-primary-variant");
const colorOnPrimary = documentStyle.getPropertyValue("--color-on-primary");
const colorSecondary = documentStyle.getPropertyValue("--color-secondary");
const colorSecondaryVariant = documentStyle.getPropertyValue("--color-secondary-variant");

const dimenIconSize = documentStyle.getPropertyValue("--dimen-icon-size");

export { 
    colorPrimary, colorPrimaryVariant, colorOnPrimary,
    colorSecondary, colorSecondaryVariant,
    dimenIconSize
}