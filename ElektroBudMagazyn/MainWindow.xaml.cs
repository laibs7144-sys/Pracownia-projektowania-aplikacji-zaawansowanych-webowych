using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace ElektroBudMagazyn
{
    
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        //nauczylem większość funkcji przez AI, bo nie wiedziałem np. jak zrobić ComboBox i jak do niego odwoływać
        //no i różne zmieniania stylu też np: VerticalAlignment="Center" albo HorizontalAlignment="Left"
        //ale pisałem i myślalem jak to zrobić sam
        //i tutaj są problemy których nie rozwiązalem np: jeśli nie wpisać/wybrać wszystkie pola to program się zamyka

        private void Add_Click(object sender, RoutedEventArgs e)
        {
            // tworzenie kontenera
            Border produkt = new Border();
            produkt.BorderBrush = Brushes.Black;
            produkt.BorderThickness = new Thickness(1);
            produkt.Margin = new Thickness(0, 0, 0, 10);
            produkt.Padding = new Thickness(5);

            // miejsce tekstu 
            StackPanel zawartosc = new StackPanel();

            TextBlock Nazwa = new TextBlock();
            Nazwa.Text = "Nazwa: " + nazwa.Text;
            zawartosc.Children.Add(Nazwa);

            TextBlock Kategoria = new TextBlock();
            Kategoria.Text = "Kategoria: " + kategoria.Text;
            zawartosc.Children.Add(Kategoria);

            TextBlock Kod_EAN = new TextBlock();
            Kod_EAN.Text = "Kod EAN: " + Ean.Text;
            zawartosc.Children.Add(Kod_EAN);

            TextBlock Localizacja = new TextBlock();
            Localizacja.Text = "Lokalizacja: " + ((ComboBoxItem)lokalizacja.SelectedItem).Content.ToString();
            zawartosc.Children.Add(Localizacja);

            //dodanie textu do kentenera
            produkt.Child = zawartosc;

            // dodanie kontenera do listy
            Container.Children.Add(produkt);

            //oczyzczanie
            nazwa.Clear();
            kategoria.Clear();
            Ean.Clear();
            lokalizacja.SelectedIndex = -1;
        }


    }
}
