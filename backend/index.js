const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main () {
  // Create a new user called `Alice`
  const newUser = await prisma.createUser({ name: 'Alice' })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)
}

main().catch(e => console.error(e))
<<<<<<< HEAD

=======
>>>>>>> 47d85df2081ece85e1e2ec12fc7b179274e92ae2
