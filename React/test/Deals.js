const Deals = artifacts.require("./Deals.sol");

require('chai').use(require('chai-as-promised')).should()

contract('Deals',(accounts)=>{
    let deals

    before( async ()=>{
        deals=await Deals.deployed()

    })

    describe('deployment',async ()=>{
    	let result
    	it('has a name', async () =>{
            const name=await deals.name()
            assert.equal(name,"hello")
        })

       it('transaction committed', async () => {

      result = await deals.add_transaction("farmer_name",
      										"consumer_name",
      										"product",
      										1,
      										2,
      										)

      // SUCESS
      const event = result.logs[0].args
      //assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is correct')
      //assert.equal(event.content, 'This is my first post', 'content is correct')
      assert.equal(event.price, 2, 'tip amount is correct')
      //assert.equal(event.author, author, 'author is correct')

      // Check that author received funds
      // let newAuthorBalance
      // newAuthorBalance = await web3.eth.getBalance(author)
      // newAuthorBalance = new web3.utils.BN(newAuthorBalance)

      // let tipAmount
      // tipAmount = web3.utils.toWei('1', 'Ether')
      // tipAmount = new web3.utils.BN(tipAmount)

      // const exepectedBalance = oldAuthorBalance.add(tipAmount)

      // assert.equal(newAuthorBalance.toString(), exepectedBalance.toString())

      // FAILURE: Tries to tip a post that does not exist
      //await socialNetwork.tipPost(99, { from: tipper, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
    })
       


    })


})