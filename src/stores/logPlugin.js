export default function logPlugin({ store }) {
  store.$subscribe((mutation, store) => {
    console.log(mutation.type, mutation.storeId, mutation.events.newValue)
  })
}