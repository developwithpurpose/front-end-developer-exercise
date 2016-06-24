class BabyStep
	attr_accessor :name, :subtitle, :para1, :para2, :count
	@@count = 0;
	def initialize(n, st)
		@name, @subtitle = n, st
		
		@@count += 1
		@count = @@count
	end

	def setP1(p1)
		@para1 = p1
	end

	def setP2(p2)
		@para2 = p2
	end
end

step1 = BabyStep.new('Baby Step 1', '$1,000 Emergency Fund')
step1.setP1('An emergency fund is for those unexpected events in life that you can&rsquo;t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It&rsquo;s not a matter of if these events will happen; it&rsquo;s simply a matter of when they will happen.')
step1.setP2('This beginning emergency fund will keep life&rsquo;s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It&rsquo;s time to break the cycle of debt!')

step2 = BabyStep.new('Baby Step 2', 'Pay off all debt using the Debt Snowball')
step2.setP1('List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don&rsquo;t worry about interest rates unless two debts have similar payoffs. If that&rsquo;s the case, then list the higher interest rate debt first.')
step2.setP2('The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It&rsquo;s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.')

step3 = BabyStep.new('Baby Step 3', '3 to 6 months of expenses in savings')
step3.setP1('Once you complete the first two baby steps, you will have built serious momentum. But don&rsquo;t start throwing all your &ldquo;extra&rdquo; money into investments quite yet. It&rsquo;s time to build your full emergency fund. Ask yourself, &ldquo;What would it take for me to live for three to six months if I lost my income?&rdquo; Your answer to that question is how much you should save.')
step3.setP2('Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you&rsquo;re paying to yourself, a buffer between you and life.')

step4 = BabyStep.new('Baby Step 4', 'Invest 15% of household income for retirement')
step4.setP1('When you reach this step, you&rsquo;ll have no payments&mdash;except the house&mdash;and a fully funded emergency fund. Now it&rsquo;s time to get serious about building wealth.')
step4.setP2('Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don&rsquo;t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.')

step5 = BabyStep.new('Baby Step 5', 'College funding for children')
step5.setP1('By this point, you should have already started Baby Step 4&mdash;investing 15% of your income&mdash;before saving for college. Whether you are saving for you or your child to go to college, you need to start now.')
step5.setP2('In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!')

step6 = BabyStep.new('Baby Step 6', 'Pay off your house early')
step6.setP1('Now it&rsquo;s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.')
step6.setP2('As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!')

step7 = BabyStep.new('Baby Step 7', 'Build wealth and give!')
step7.setP1('It&rsquo;s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It\'s really the only way to live!')
step7.setP2('Golda Meir says, &ldquo;You can&rsquo;t shake hands with a clenched fist.&rdquo; Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family&rsquo;s future, and be gracious enough to bless others. You can do all three at the same time.')

$steps = [step1, step2, step3, step4, step5, step6, step7]