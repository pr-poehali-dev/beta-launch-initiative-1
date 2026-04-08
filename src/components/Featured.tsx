export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/3e23ad6a-d960-4004-a7bc-58f1d2e0de46/files/d4a4061d-16c2-4c62-b329-d2bc204ddf53.jpg"
          alt="Русские эмигранты, 1920-е"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Ключевые темы исследования</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Быт и культура, идентичность и ностальгия — три волны эмиграции оставили
          глубокий след в истории Европы и сохранили живую русскую культуру за рубежом.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Изучить материалы
        </button>
      </div>
    </div>
  );
}