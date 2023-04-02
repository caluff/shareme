import sanityClient, {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '5osbtmpl',
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: 'skDrRW6IDck6nwsDjHEmYxH5bDjy1i5GXO46I98ACcfcYCWs0McTqKIgSrPgStHY1ng4IHGEdyKKiDB9Z1ZjFkEeh8pOkP6ft59tHYprAUcMBfDtx430ww23leuATbebEfZpLViBaYRFgDBDa7Doas69hLss2zeSIRvMsqeXf7V1s8OXtwcl',
});
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source)