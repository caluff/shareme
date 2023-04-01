import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'5osbtmpl',
    dataset:'production',
    apiVersion:'2023-4-1',
    useCdn:true,
    token:'sk43bWvfTUW2HSpBlnhxXpWPglRDGwBS44RlR4geq4pmf7vJblBOOCe5Ej1Id2tQnxQdWLiIn3INneS54S2P5Q6YTuV2GsfE6sBv3dTU7c05yOkDMELeaXOtThgJJlNpIVfTCnMCZiGN7p3k0xVwEl8ABTgcJCQF9y0VbheSXiZfVDkj8SnK',
});
const builder = imageUrlBuilder(client);
export const urlFor = (source:any) =>builder.image(source)