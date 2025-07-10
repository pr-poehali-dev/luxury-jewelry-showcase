import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-pearl">
      {/* Header */}
      <header className="relative border-b border-luxury-gold/20 backdrop-blur-sm bg-luxury-black/95">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon
                name="Crown"
                className="text-luxury-gold animate-sparkle"
                size={32}
              />
              <h1 className="font-playfair text-2xl font-bold text-luxury-gold">
                JEWELRY HOUSE
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#collections"
                className="font-lora text-luxury-pearl hover:text-luxury-gold transition-colors"
              >
                Коллекции
              </a>
              <a
                href="#mastery"
                className="font-lora text-luxury-pearl hover:text-luxury-gold transition-colors"
              >
                Мастерство
              </a>
              <a
                href="#history"
                className="font-lora text-luxury-pearl hover:text-luxury-gold transition-colors"
              >
                История
              </a>
              <a
                href="#boutiques"
                className="font-lora text-luxury-pearl hover:text-luxury-gold transition-colors"
              >
                Бутики
              </a>
            </div>
            <Button
              variant="outline"
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
            >
              Консультация
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-luxury-charcoal to-luxury-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1)_0%,transparent_50%)]"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <Icon
              name="Diamond"
              className="text-luxury-gold mx-auto animate-sparkle"
              size={80}
            />
          </div>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-luxury-gold via-luxury-pearl to-luxury-gold bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
            Эксклюзивные
            <br />
            Украшения
          </h1>
          <p className="font-lora text-xl md:text-2xl mb-8 text-luxury-pearl/80 max-w-2xl mx-auto">
            Индивидуальные заказы и гравировка от мастеров высочайшего класса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90 px-8 py-3 text-lg">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Создать украшение
            </Button>
            <Button
              variant="outline"
              className="border-luxury-pearl text-luxury-pearl hover:bg-luxury-pearl hover:text-luxury-black px-8 py-3 text-lg"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Посмотреть коллекции
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div
          className="absolute top-20 left-10 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Icon
            name="Star"
            className="text-luxury-gold/30 animate-sparkle"
            size={24}
          />
        </div>
        <div
          className="absolute top-40 right-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Icon
            name="Gem"
            className="text-luxury-gold/30 animate-sparkle"
            size={28}
          />
        </div>
        <div
          className="absolute bottom-32 left-20 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <Icon
            name="Star"
            className="text-luxury-gold/30 animate-sparkle"
            size={20}
          />
        </div>
      </section>

      {/* Custom Orders & Engraving Section */}
      <section id="custom-orders" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-gold mb-6">
              Индивидуальные Заказы
            </h2>
            <p className="font-lora text-xl text-luxury-pearl/80 max-w-3xl mx-auto">
              Воплощаем ваши мечты в драгоценные произведения искусства с
              персональной гравировкой
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-luxury-charcoal/50 border-luxury-gold/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-luxury-gold/10 rounded-full">
                      <Icon
                        name="Paintbrush"
                        className="text-luxury-gold"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-luxury-gold mb-2">
                        Эскиз и Дизайн
                      </h3>
                      <p className="font-lora text-luxury-pearl/80">
                        Создаем уникальный дизайн по вашим пожеланиям с
                        3D-визуализацией
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-luxury-charcoal/50 border-luxury-gold/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-luxury-gold/10 rounded-full">
                      <Icon
                        name="Type"
                        className="text-luxury-gold"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-luxury-gold mb-2">
                        Персональная Гравировка
                      </h3>
                      <p className="font-lora text-luxury-pearl/80">
                        Изящная гравировка имен, дат и символов с ювелирной
                        точностью
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-luxury-charcoal/50 border-luxury-gold/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-luxury-gold/10 rounded-full">
                      <Icon
                        name="Award"
                        className="text-luxury-gold"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-luxury-gold mb-2">
                        Сертификат Подлинности
                      </h3>
                      <p className="font-lora text-luxury-pearl/80">
                        Каждое изделие сопровождается сертификатом качества и
                        происхождения
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-luxury-gold/20 to-luxury-charcoal/50 rounded-3xl p-8 backdrop-blur-sm border border-luxury-gold/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.1)_0%,transparent_70%)] rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <Icon
                      name="Gem"
                      className="text-luxury-gold mx-auto animate-rotate-360"
                      size={64}
                    />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-luxury-gold text-center mb-6">
                    Процесс Создания
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-sm">
                        1
                      </div>
                      <span className="font-lora text-luxury-pearl">
                        Консультация и эскиз
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-sm">
                        2
                      </div>
                      <span className="font-lora text-luxury-pearl">
                        Выбор материалов
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-sm">
                        3
                      </div>
                      <span className="font-lora text-luxury-pearl">
                        Ручная работа мастера
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center text-luxury-black font-bold text-sm">
                        4
                      </div>
                      <span className="font-lora text-luxury-pearl">
                        Финальная отделка
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-8 bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90">
                    Начать создание
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section id="collections" className="py-20 px-6 bg-luxury-charcoal/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-gold mb-6">
              Эксклюзивные Коллекции
            </h2>
            <p className="font-lora text-xl text-luxury-pearl/80">
              Откройте для себя мир драгоценностей высочайшего качества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-luxury-black/80 border-luxury-gold/20 backdrop-blur-sm hover:border-luxury-gold/50 transition-all group">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-luxury-gold/20 to-luxury-charcoal/50 flex items-center justify-center">
                  <Icon
                    name="Gem"
                    className="text-luxury-gold group-hover:animate-sparkle"
                    size={80}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-luxury-gold mb-2">
                    Классика
                  </h3>
                  <p className="font-lora text-luxury-pearl/80">
                    Вечные формы и благородные материалы
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-luxury-black/80 border-luxury-gold/20 backdrop-blur-sm hover:border-luxury-gold/50 transition-all group">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-luxury-gold/20 to-luxury-charcoal/50 flex items-center justify-center">
                  <Icon
                    name="Star"
                    className="text-luxury-gold group-hover:animate-sparkle"
                    size={80}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-luxury-gold mb-2">
                    Авангард
                  </h3>
                  <p className="font-lora text-luxury-pearl/80">
                    Современные решения и смелые формы
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-luxury-black/80 border-luxury-gold/20 backdrop-blur-sm hover:border-luxury-gold/50 transition-all group">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-luxury-gold/20 to-luxury-charcoal/50 flex items-center justify-center">
                  <Icon
                    name="Crown"
                    className="text-luxury-gold group-hover:animate-sparkle"
                    size={80}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-luxury-gold mb-2">
                    Королевская
                  </h3>
                  <p className="font-lora text-luxury-pearl/80">
                    Роскошные изделия с историей
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black border-t border-luxury-gold/20 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon
                  name="Crown"
                  className="text-luxury-gold animate-sparkle"
                  size={24}
                />
                <h3 className="font-playfair text-xl font-bold text-luxury-gold">
                  JEWELRY HOUSE
                </h3>
              </div>
              <p className="font-lora text-luxury-pearl/60">
                Создаем украшения мечты уже более 50 лет
              </p>
            </div>

            <div>
              <h4 className="font-playfair text-lg font-semibold text-luxury-gold mb-4">
                Услуги
              </h4>
              <ul className="space-y-2 font-lora text-luxury-pearl/80">
                <li>Индивидуальные заказы</li>
                <li>Гравировка</li>
                <li>Реставрация</li>
                <li>Оценка</li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair text-lg font-semibold text-luxury-gold mb-4">
                Коллекции
              </h4>
              <ul className="space-y-2 font-lora text-luxury-pearl/80">
                <li>Кольца</li>
                <li>Серьги</li>
                <li>Ожерелья</li>
                <li>Браслеты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair text-lg font-semibold text-luxury-gold mb-4">
                Контакты
              </h4>
              <div className="space-y-2 font-lora text-luxury-pearl/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@jewelryhouse.ru</p>
                <p>Москва, ул. Тверская, 1</p>
              </div>
            </div>
          </div>

          <div className="border-t border-luxury-gold/20 mt-8 pt-8 text-center">
            <p className="font-lora text-luxury-pearl/60">
              © 2024 Jewelry House. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
