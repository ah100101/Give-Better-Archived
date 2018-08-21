export default function (context) {
  console.log('in middleware')
  console.log(context)
  console.log('app')
  console.log(context.app)
  // TODO: use store to get the current user
}
