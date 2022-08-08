


const main = async() => {
    const greaterFactory = await ethers.getContractFactory('Greeter')
    const greaterContract = await greaterFactory.deploy("initialGreet")
    await greaterContract.deployed()
  console.log("Contract deployed to: ", greaterContract.address)
  }
  const runMain = async() => {
    try {
      await main()
      process.exit(0)
    } catch(error) {
      console.log(error)
      process.exit(1)
    }
  }
  runMain()