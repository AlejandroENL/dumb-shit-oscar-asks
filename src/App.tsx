import { useMemo, useState } from 'react'

type Article = {
  id: number
  category: string
  headline: string
  summary: string
  author: string
  location: string
  time: string
  body: string[]
}

export default function DumbQuestionsNewsSite() {

  const articles: Article[] = [
    {
      id: 1,
      category: 'Health',
      headline: 'When You Wipe, How Many Knuckles Deep Do You Go?',
      summary:
        'A routine hygiene discussion escalated after participants were asked to define acceptable wiping depth.',
      author: 'Bathroom Affairs Desk',
      location: 'Undisclosed Restroom',
      time: 'Updated 8 minutes ago',
      body: [
        'A routine conversation took an unexpected turn after one member of the public raised a question experts are calling “deeply unnecessary, but difficult to ignore.”',
        'The inquiry immediately divided respondents, with some refusing to participate while others demanded a more precise definition of the measurement system.',
        'Officials have not issued formal guidance at this time.'
      ]
    },
    {
      id: 2,
      category: 'World',
      headline: 'If You Can Go Past, Can You Go Future?',
      summary:
        'A philosophical language debate forced citizens to reconsider the basic structure of time itself.',
      author: 'Temporal Logic Bureau',
      location: 'Unknown Timeline',
      time: 'Updated 14 minutes ago',
      body: [
        'The group was forced into a philosophical emergency after a question challenged the assumed relationship between the past, the future, and the English language.',
        'Witnesses say the room fell silent as members attempted to determine whether the statement was technically wrong, secretly brilliant, or both.',
        'Further investigation is pending.'
      ]
    },
    {
      id: 3,
      category: 'Lifestyle',
      headline:
        'Do Yall Put On Sock Sock Shoe Shoe or Sock Shoe Sock Shoe?',
      summary:
        'A household routine once considered harmless has become the center of a national-style debate.',
      author: 'Daily Routine Correspondent',
      location: 'Bedroom Floor',
      time: 'Breaking now',
      body: [
        'A new household controversy has emerged after citizens were asked to defend the exact order in which they apply socks and shoes.',
        'Supporters of the sock-sock-shoe-shoe method argue it reflects structure and civilization. Critics say sock-shoe-sock-shoe provides a more complete foot-by-foot workflow.',
        'No consensus has been reached.'
      ]
    },
    {
      id: 4,
      category: 'Food',
      headline:
        'When Yall Eat Elote Yall Eat It From Side or From Front?',
      summary:
        'The public remains sharply divided on proper corn-consumption positioning.',
      author: 'Street Food Desk',
      location: 'Local Cookout',
      time: 'Updated 22 minutes ago',
      body: [
        'A seemingly innocent food question has escalated into a full community review of elote eating mechanics.',
        'Some witnesses described the side approach as standard procedure, while others argued the front-facing method deserved further analysis.',
        'The corn remains unavailable for comment.'
      ]
    },
    {
      id: 5,
      category: 'Lifestyle',
      headline:
        'Are You Taking a Bite Out of Your Burger or Fries First?',
      summary:
        'Meal-order preferences continue to expose deep divisions among diners.',
      author: 'Meal Order Analyst',
      location: 'Drive-Thru Lane',
      time: 'Updated 31 minutes ago',
      body: [
        'An urgent dining poll has raised questions about whether people begin a meal with the burger or the fries.',
        'Fries-first voters argue temperature is the deciding factor, while burger-first voters claim the main item deserves priority status.',
        'Experts warn that eating both at the same time may complicate the findings.'
      ]
    },
    {
      id: 6,
      category: 'Sports',
      headline:
        'Have Yall Been Keeping Up With the WNBA Playoffs?',
      summary:
        'The unexpected sports check-in immediately placed pressure on unprepared respondents.',
      author: 'Sports Desk',
      location: 'Group Chat Arena',
      time: 'Updated 37 minutes ago',
      body: [
        'A sports-related check-in caught several group members off guard after they were asked whether they had been following the WNBA playoffs.',
        'The question was direct, fair, and yet somehow felt like a pop quiz.',
        'Analysts say the group is expected to recover.'
      ]
    },
    {
      id: 7,
      category: 'Food',
      headline:
        'If You Could Have One Food That Never Made You Gain Weight What Would It Be?',
      summary:
        'Citizens were forced to confront an emotionally difficult hypothetical scenario.',
      author: 'Nutrition Fantasy Desk',
      location: 'Imaginary Buffet',
      time: 'Updated 41 minutes ago',
      body: [
        'Residents were asked to imagine a world where one food could be eaten forever without weight gain.',
        'The question immediately produced strong emotional responses, many involving fried foods, bread, cheese, or combinations of all three.',
        'Officials confirmed the scenario remains fictional and deeply unfair.'
      ]
    },
    {
      id: 8,
      category: 'History',
      headline:
        'You Think the Person That Invented Tostadas Knew About Pizza? Which Came First?',
      summary:
        'Food historians were pulled into a debate nobody expected to have.',
      author: 'Historical Foods Unit',
      location: 'Archive of Snacks',
      time: 'Updated 49 minutes ago',
      body: [
        'A historical investigation has begun after one citizen questioned whether the inventor of tostadas knew about pizza.',
        'The inquiry has raised broader concerns about cross-cultural flat-food awareness throughout history.',
        'Researchers are currently determining whether this investigation should have started at all.'
      ]
    },
    {
      id: 9,
      category: 'Health',
      headline:
        'Is There a Coffee That Makes Yall Poop Faster Than Other Coffees?',
      summary:
        'Coffee drinkers continue searching for answers regarding digestive acceleration.',
      author: 'Digestive Affairs Reporter',
      location: 'Kitchen Counter',
      time: 'Updated 1 hour ago',
      body: [
        'Coffee drinkers are demanding answers after reports suggested certain coffees may produce faster digestive consequences than others.',
        'While some participants pointed to strength, roast, or timing, others insisted the real variable was panic.',
        'The study remains ongoing and very personal.'
      ]
    },
    {
      id: 10,
      category: 'Lifestyle',
      headline:
        'If You Could Only Shower in the Morning or Night for the Rest of Your Life Which Are You Choosing?',
      summary:
        'Residents remain split after being forced into a lifetime hygiene commitment.',
      author: 'Hygiene Policy Desk',
      location: 'Bathroom District',
      time: 'Updated 1 hour ago',
      body: [
        'A lifetime shower restriction scenario has forced residents to pick between morning and night showers.',
        'Morning advocates cited alertness and a fresh start. Night supporters argued cleanliness before bed is a moral responsibility.',
        'Undecided voters asked whether exceptions could be granted after yard work.'
      ]
    },
    {
      id: 11,
      category: 'Culture',
      headline: 'Is Atole Black?',
      summary:
        'A cultural classification question unexpectedly entered public discourse.',
      author: 'Culture Desk',
      location: 'Holiday Table',
      time: 'Updated 1 hour ago',
      body: [
        'A cultural classification debate began after a question about atole entered the public record.',
        'Respondents requested clarification, context, and possibly a sample before making any official statements.',
        'The discussion remains active.'
      ]
    },
    {
      id: 12,
      category: 'Sports',
      headline: 'Is Maxx Crosby Black?',
      summary:
        'A direct athlete-related inquiry briefly disrupted normal football discussion.',
      author: 'Roster Identity Desk',
      location: 'Sports Chat',
      time: 'Updated 1 hour ago',
      body: [
        'A player-related question briefly interrupted normal sports discussion after Maxx Crosby became the subject of an unexpected identity inquiry.',
        'Several members paused before responding, unsure whether the question was about appearance, background, or pure confusion.',
        'The sports desk has moved on, but the question remains archived.'
      ]
    },
    {
      id: 13,
      category: 'Health',
      headline:
        'What Is the Best Time to Drink an Energy Drink in a Day?',
      summary:
        'Public debate intensifies over the ideal timing for caffeine consumption.',
      author: 'Caffeine Timing Bureau',
      location: 'Gas Station Cooler',
      time: 'Updated 2 hours ago',
      body: [
        'Health observers were asked to determine the ideal time of day for consuming an energy drink.',
        'Morning voters cited productivity. Afternoon voters cited survival. Late-night voters were asked to seek help.',
        'No official recommendation has been issued.'
      ]
    },
    {
      id: 14,
      category: 'Food',
      headline: 'Is Hot Fudge Chocolate?',
      summary:
        'Dessert experts continue struggling to define the limits of chocolate classification.',
      author: 'Dessert Standards Board',
      location: 'Ice Cream Counter',
      time: 'Updated 2 hours ago',
      body: [
        'A dessert classification dispute has emerged after hot fudge was placed under review for possible chocolate status.',
        'Some argued the answer was obvious. Others demanded a formal breakdown of fudge, syrup, chocolate, and vibes.',
        'The dessert was consumed before evidence could be preserved.'
      ]
    },
    {
      id: 15,
      category: 'Public Safety',
      headline:
        'How Many Drops Have to Come Out Before You Say You Peed Yourself?',
      summary:
        'Citizens remain divided on the exact threshold for a self-declared incident.',
      author: 'Incident Response Desk',
      location: 'Emergency Laundry Room',
      time: 'Updated 2 hours ago',
      body: [
        'A measurement crisis is underway after citizens were asked to define the minimum number of drops required to classify an incident as peeing yourself.',
        'The debate quickly shifted from science to ethics, with some arguing intent matters and others insisting volume is the only metric.',
        'Laundry officials are monitoring the situation.'
      ]
    },
    {
      id: 16,
      category: 'Lifestyle',
      headline:
        'When Yall Shower Are You Facing the Shower Head or Back to It?',
      summary:
        'Bathroom behavior has become the latest unexpectedly polarizing issue.',
      author: 'Domestic Behavior Desk',
      location: 'Shower Stall',
      time: 'Updated 2 hours ago',
      body: [
        'A fresh round of shower discourse has begun after citizens were asked whether they face the shower head or turn their back to it.',
        'The answers revealed surprising confidence from both sides and raised new questions about water pressure, soap strategy, and personal trust.',
        'The investigation will continue after everyone dries off.'
      ]
    }
  ]

  const [selectedArticle, setSelectedArticle] = useState<Article>(articles[2])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(articles.map((article) => article.category)))]

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') {
      return articles
    }

    return articles.filter((article) => article.category === selectedCategory)
  }, [articles, selectedCategory])

  const trending = articles.slice(0, 5)

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-950">
      <header className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Digital Edition
              </p>
              <h1 className="mt-2 text-4xl font-black tracking-tight md:text-6xl">
                Dumb Shit Oscar Asks
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-neutral-600 md:text-base">
                Documenting the questions that continue to derail otherwise normal conversations.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs md:text-sm">
              <div className="rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3">
                <p className="font-bold">Edition</p>
                <p className="text-neutral-600">Late Night</p>
              </div>
              <div className="rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3">
                <p className="font-bold">Status</p>
                <p className="text-neutral-600">Developing</p>
              </div>
              <div className="rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-3">
                <p className="font-bold">Region</p>
                <p className="text-neutral-600">Group Chat</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="border-b border-neutral-300 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-3 text-sm font-medium text-neutral-700">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 transition ${
                selectedCategory === category
                  ? 'border-neutral-950 bg-neutral-950 text-white'
                  : 'border-neutral-300 bg-white hover:bg-neutral-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[2fr_1fr]">
        <section className="space-y-8">
          <article className="rounded-3xl border border-neutral-300 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-4 inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {selectedArticle.category}
            </div>
            <h2 className="max-w-4xl text-3xl font-black leading-tight md:text-5xl">
              {selectedArticle.headline}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
              {selectedArticle.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-500">
              <span>By {selectedArticle.author}</span>
              <span>{selectedArticle.location}</span>
              <span>{selectedArticle.time}</span>
            </div>

            <div className="mt-8 space-y-5 border-t border-neutral-200 pt-6 text-base leading-8 text-neutral-700">
              {selectedArticle.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <section>
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Latest Coverage</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Click any story to open the full report above.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {filteredArticles.map((article) => (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                    selectedArticle.id === article.id ? 'border-neutral-950' : 'border-neutral-300'
                  }`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                    {article.category}
                  </p>
                  <h4 className="mt-3 text-xl font-extrabold leading-tight">{article.headline}</h4>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{article.summary}</p>
                  <div className="mt-4 text-sm font-semibold text-neutral-900">Read full story →</div>
                </button>
              ))}
            </div>
          </section>
        </section>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-neutral-300 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-wide">Trending Now</h3>
            <div className="mt-4 space-y-4">
              {trending.map((article, index) => (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="flex w-full gap-4 border-b border-neutral-200 pb-4 text-left last:border-b-0 last:pb-0"
                >
                  <span className="text-2xl font-black text-neutral-300">0{index + 1}</span>
                  <p className="text-sm font-semibold leading-6">{article.headline}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-neutral-300 bg-neutral-900 p-6 text-white shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Public Poll
            </p>
            <h3 className="mt-3 text-2xl font-black leading-tight">
              Which shower method reflects the highest character?
            </h3>
            <div className="mt-5 space-y-3 text-sm">
              {[
                ['Facing the water', '48%'],
                ['Back to the water', '44%'],
                ['Switching throughout', '8%']
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 flex items-center justify-between">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-white" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-neutral-300 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-black uppercase tracking-wide">About</h3>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Dumb Shit Oscar Asks is an independent publication focused on questions that probably answer themselves, yet still demand public debate.
            </p>
          </section>
        </aside>
      </main>
    </div>
  )
}
