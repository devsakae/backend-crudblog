module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('blog_posts', [
      {
        id: 1,
        title: 'The future our grandchildren deserve',
        content: `I turned 67 in October. It’s hard to believe I’m that old—in America, most people my age are retired!

          But I won’t be slowing down anytime soon. I’m still going full speed on the project I began more than two decades ago, which is to give the vast majority of my resources back to society. Although I don’t care where I rank on the list of the world’s richest people, I do know that as I succeed in giving, I will drop down and eventually off the list altogether.
          
          I’ve always viewed my philanthropy as a way to help reduce the awful inequities I see around the world. I also feel a responsibility to give my wealth back to society in ways that do the most good for the most people. But I started looking at the world through a new lens recently—when my older daughter gave me the incredible news that I’ll become a grandfather next year.
          
          Simply typing that phrase, “I’ll become a grandfather next year,” makes me emotional. And the thought gives a new dimension to my work. When I think about the world my grandchild will be born into, I’m more inspired than ever to help everyone’s children and grandchildren have a chance to survive and thrive.
          
          This is a long-term project that requires patience; in the effort to make the world more equitable, success is measured in years and decades. Maybe age makes it easier to understand this. When I was in my twenties, I didn’t think that anyone my grandparents’ age had anything useful to offer the world at large. As I get older, though, I see how wrong I was.
          
          I do almost all of my work through the Gates Foundation, though most of my efforts on climate and clean energy are housed at Breakthrough Energy and I fund research on Alzheimer’s disease separately. Global health is a major focus for the foundation because it’s the worst inequity on the planet and it’s a solvable problem. More than two decades ago, Melinda and I were shocked to learn how little money and effort were put into saving the lives of children in poor countries, and we thought the world should do more.
          
          The world has been doing more—and it shows. Since 2000, when the foundation began, the childhood death rate has been cut by half.`,
        user_id: 1,
        published: new Date('2022-12-20T19:58:00.000Z'),
        updated: new Date('2022-12-20T19:58:51.000Z'),
      },
      {
        id: 2,
        title: 'A new blog is born : all things Steve Jobs opens!',
        content: `Hello World!

        This is the very first post of all things Steve Jobs, a blog dedicated absolutely and entirely to our beloved hero Steve Jobs, and a nice addition to my “old” website all about Steve Jobs.com. I am starting the blog under the radar for a month or so, so nobody’s probably ever going to read this, but for the record, here is a little manifesto I just made on why the blog exists  :
        
        I was having a difficult time keeping the website up to date or, to be more precise, keeping the Biography up to date. As you all know, every 6 months or so, Steve takes the stage and announces a revolutionary or at least major product which has a lasting impact on one or more industries. All about Steve Jobs.com being a static website, the bio is pretty much like a book I have to rewrite after every such event. This tiresome process is now over: the bio will deal with pre-2010 events (stopping at the iPad intro), and this blog with the news.
        there was no real reason for someone who had already visited all about Steve Jobs.com thoroughly to ever come back. Indeed, the website is pretty much complete as it is. The only parts that are updated are the pictures sections (after new Stevenotes and/or when new hardware comes out) and, once in a while, the bio. That’s why I introduced the pic of the month in February – but obviously people don’t go back to the website just to see this one picture. I hope this blog’s content will be valuable enough to entice visitors to come back often.
        all about Steve Jobs.com is pretty much an untapped treasure trove. This is obvious to me when people thank me for the interviews page (among others). It’s interesting to a number of people, but only seen by less than 3% of visitors. all things Steve Jobs is also a way for me to feature hidden parts of all about Steve Jobs.com from time to time.
        there is no good blog about Steve Jobs. I’m clearly addressing a niche here : Steve Jobs fans. I know that niche well, because I’m obviously part of it. And I’m sad that there’s no good blog to inform us every day about his Steveness (especially since Fake Steve resumed being satirical). There are hundreds of Mac/Apple/hi-tech websites and blogs to be sure., but none is filtering out the Steve Jobs info to get it directly to us. So I decided to be this filter – and if I’m the only one who’s interested, so be it! At least I’ll have one happy regular visitor 🙂
        I want to interact with you guys. Tens of thousands of visitors visit all about Steve Jobs.com every month, and except for a couple emails, I get in touch with practically none of them. My wish with this blog is to end that, and finally get to know you guys, other crazy die-hard Steve Jobs worshippers!
        I think it’s cool. This is just a reminder that there’s nothing serious about all things Steve Jobs, and I can post pretty much whatever I fancy here, whenever I feel it.  There must be a reason why journalists hate bloggers!
        What all things Steve Jobs is not : a SEO scheme. Why would I care? all about Steve jobs.com is already #3 on Google, behind… Wikipedia and Apple.com. Honestly, I don’t think I can do better than that.
        
        That’s all folks! The next post will come tomorrow : what I plan to post on all things Steve Jobs.
        
        Romain
        
        `,
        user_id: 2,
        published: new Date('2010-09-12T11:02:00.000Z'),
        updated: new Date('2010-09-12T11:02:31.000Z'),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('blog_posts', null, {});
  },
};
