import { useState } from "react";
import Icon from "@/components/ui/icon";

const people = [
  {
    name: "Иван Бунин",
    years: "1870–1953",
    city: "Париж",
    role: "Писатель, поэт",
    photo: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/b44eadea-7374-4dcf-8610-ce262ed8f55d.jpg",
    quote: "«Эмиграция — это маленькая смерть»",
    bio: "Покинул Россию в 1920 году через Константинополь. Поселился в Париже, где написал «Тёмные аллеи» и мемуары о Толстом и Чехове. В 1933 году стал первым русским писателем, получившим Нобелевскую премию по литературе.",
    tags: ["Нобелевская премия 1933", "«Тёмные аллеи»", "«Жизнь Арсеньева»"],
    color: "amber",
  },
  {
    name: "Владимир Набоков",
    years: "1899–1977",
    city: "Берлин → Париж",
    role: "Писатель",
    photo: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/b19d7fef-d0f6-4edc-8a89-52fe6fad8b00.jpg",
    quote: "«Я унёс с собой Россию»",
    bio: "Эмигрировал в 1919 году, учился в Кембридже. Жил в Берлине, писал по-русски под псевдонимом Сирин. В 1937 году переехал в Париж, затем в США, где прославился на весь мир романом «Лолита».",
    tags: ["«Машенька»", "«Защита Лужина»", "«Лолита»"],
    color: "blue",
  },
  {
    name: "Марина Цветаева",
    years: "1892–1941",
    city: "Прага → Париж",
    role: "Поэтесса",
    photo: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/144d403d-8502-4650-a273-c38999845873.jpg",
    quote: "«Россия — это не государство. Это душа»",
    bio: "Уехала в эмиграцию в 1922 году к мужу Сергею Эфрону. Три года провела в Праге, затем — в Париже. Жила в бедности, но продолжала писать. В 1939 году вернулась в СССР вслед за мужем и дочерью.",
    tags: ["«Поэма Горы»", "«Крысолов»", "«После России»"],
    color: "rose",
  },
  {
    name: "Сергей Рахманинов",
    years: "1873–1943",
    city: "Нью-Йорк",
    role: "Композитор, пианист",
    photo: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/634c37a9-6abb-4edd-a069-c959a653c550.jpg",
    quote: "«Покинув Россию, я потерял желание сочинять»",
    bio: "Уехал из России в декабре 1917 года «на гастроли» и не вернулся. Обосновался в США, стал одним из самых высокооплачиваемых пианистов мира. Долгие годы почти не сочинял — тяжело переживал разлуку с родиной.",
    tags: ["3-й фортепианный концерт", "«Рапсодия на тему Паганини»", "«Симфонические танцы»"],
    color: "violet",
  },
  {
    name: "Александр Куприн",
    years: "1870–1938",
    city: "Париж",
    role: "Писатель",
    photo: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/9cda3e61-d2d8-4df9-a1c9-0baa17068d11.jpg",
    quote: "«В эмиграции нет ничего страшнее тишины»",
    bio: "Эмигрировал в 1920 году. Жил в Париже, страдал от ностальгии и бедности, много пил. В 1937 году, уже тяжело больным, вернулся в СССР — одним из немногих крупных писателей, кто решился на это.",
    tags: ["«Юнкера»", "«Купол св. Исаакия»", "Возвращение в СССР"],
    color: "green",
  },
  {
    name: "Фёдор Шаляпин",
    years: "1873–1938",
    city: "Париж",
    role: "Оперный певец",
    photo: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/040d429d-a00d-45b0-ab04-d8bf6716d939.jpg",
    quote: "«Голос мой остался русским»",
    bio: "Уехал на гастроли в 1921 году и остался за рубежом. Выступал на лучших сценах мира — Ла Скала, Метрополитен-опера, Ковент-Гарден. Советские власти в 1927 году лишили его звания Народного артиста.",
    tags: ["Метрополитен-опера", "Ковент-Гарден", "Лишён звания в СССР"],
    color: "orange",
  },
];

const colorMap: Record<string, { border: string; bg: string; tag: string; text: string }> = {
  amber:  { border: "border-amber-200",  bg: "bg-amber-50",  tag: "bg-amber-100 text-amber-800",  text: "text-amber-700"  },
  blue:   { border: "border-blue-200",   bg: "bg-blue-50",   tag: "bg-blue-100 text-blue-800",    text: "text-blue-700"   },
  rose:   { border: "border-rose-200",   bg: "bg-rose-50",   tag: "bg-rose-100 text-rose-800",    text: "text-rose-700"   },
  violet: { border: "border-violet-200", bg: "bg-violet-50", tag: "bg-violet-100 text-violet-800", text: "text-violet-700" },
  green:  { border: "border-green-200",  bg: "bg-green-50",  tag: "bg-green-100 text-green-800",  text: "text-green-700"  },
  orange: { border: "border-orange-200", bg: "bg-orange-50", tag: "bg-orange-100 text-orange-800", text: "text-orange-700" },
};

export default function Personalities() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="bg-neutral-50 px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Судьбы</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Персоналии
        </h2>
        <p className="text-neutral-500 mb-12 text-base lg:text-lg max-w-2xl">
          Писатели, композиторы, артисты — люди, чьё творчество стало голосом целого поколения изгнанников.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person) => {
            const c = colorMap[person.color];
            const isOpen = expanded === person.name;

            return (
              <div
                key={person.name}
                className={`border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white ${c.border}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover object-top filter grayscale"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 px-5 py-3 ${c.bg} border-t ${c.border}`}>
                    <p className={`text-xs font-semibold uppercase tracking-widest ${c.text}`}>{person.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-neutral-900 font-bold text-lg leading-tight">{person.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-neutral-400 text-xs uppercase tracking-wide">{person.years}</span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-neutral-400 text-xs">{person.city}</span>
                  </div>

                  <p className="text-neutral-600 text-sm italic mb-4 leading-snug">{person.quote}</p>

                  {isOpen && (
                    <div className="mb-4">
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4">{person.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {person.tags.map((tag) => (
                          <span key={tag} className={`text-xs px-2 py-1 rounded-full font-medium ${c.tag}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setExpanded(isOpen ? null : person.name)}
                    className="flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-700 transition-colors duration-200 mt-1"
                  >
                    {isOpen ? "Свернуть" : "Читать биографию"}
                    <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
