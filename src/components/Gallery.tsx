import { useState } from "react";
import Icon from "@/components/ui/icon";

const photos = [
  {
    src: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/3412cdc3-9959-4f86-a2d2-15e2618c5854.jpg",
    title: "Русское кафе на Монпарнасе",
    city: "Париж",
    year: "1924",
    description: "Эмигрантские кафе стали местом встреч интеллигенции. Здесь велись споры о судьбе России, читались стихи, плелись заговоры.",
  },
  {
    src: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/cbce6462-816d-4b01-a0e3-6b2b3718dca8.jpg",
    title: "Православная служба",
    city: "Берлин",
    year: "1921",
    description: "Церковь оставалась главным духовным центром эмиграции. В приходах сохранялся русский язык, традиции и чувство общей идентичности.",
  },
  {
    src: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/c9529696-3a6d-4b87-baf2-be00d906e3dc.jpg",
    title: "Семейный портрет",
    city: "Прага",
    year: "1926",
    description: "Большинство эмигрантских семей жили скромно, но старались сохранить уклад и воспитать детей в русских традициях.",
  },
  {
    src: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/526b5fbb-c1a9-4dba-8f34-1ebb0fa9d7a1.jpg",
    title: "Редакция русской газеты",
    city: "Париж",
    year: "1922",
    description: "Русская пресса за рубежом была чрезвычайно активна. Только в Париже выходило более 30 газет и журналов на русском языке.",
  },
  {
    src: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/7618d585-3c22-4f09-9f72-b1735ecb5365.jpg",
    title: "Эмигрантский бал",
    city: "Прага",
    year: "1928",
    description: "Балы и вечера устраивались регулярно — это был способ сохранить светский уклад, собрать деньги для нуждающихся и просто не забыть, кем ты был.",
  },
  {
    src: "https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/52867af8-f9a6-494f-9760-49ebd001bafd.jpg",
    title: "Русская школа",
    city: "Париж",
    year: "1923",
    description: "Обучение детей на русском языке было приоритетом эмиграции. Русские гимназии работали в десятках городов Европы.",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + photos.length) % photos.length);
  };

  const next = () => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % photos.length);
  };

  return (
    <section className="bg-neutral-950 px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Архивные материалы</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Галерея
        </h2>
        <p className="text-neutral-400 mb-12 text-base lg:text-lg max-w-2xl">
          Снимки из жизни Русского зарубежья. Нажмите на фото, чтобы рассмотреть подробнее.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-lg aspect-square bg-neutral-900 cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm leading-tight">{photo.title}</p>
                  <p className="text-neutral-300 text-xs mt-1">{photo.city}, {photo.year}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={28} />
          </button>

          <button
            className="absolute left-4 lg:left-8 text-white/60 hover:text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <Icon name="ChevronLeft" size={36} />
          </button>

          <div
            className="max-w-3xl w-full flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].title}
              className="w-full max-h-[65vh] object-contain rounded-lg filter grayscale"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-white font-semibold text-lg">{photos[lightbox].title}</h3>
                <span className="text-neutral-500 text-sm">— {photos[lightbox].city}, {photos[lightbox].year}</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{photos[lightbox].description}</p>
              <p className="text-neutral-700 text-xs mt-1">{lightbox + 1} / {photos.length}</p>
            </div>
          </div>

          <button
            className="absolute right-4 lg:right-8 text-white/60 hover:text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <Icon name="ChevronRight" size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
