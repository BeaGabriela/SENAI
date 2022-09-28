package src.visao;

import src.modelo.Carro;
import src.modelo.Moto;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Scanner;

public class Menu {
	private static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	private static ArrayList<Carro> car = new ArrayList<>();
	private static ArrayList<Moto> mot = new ArrayList<>();

	public static void main(String[] args) throws ParseException {
		Scanner scan = new Scanner(System.in);
		int menu = 0;
		System.out.println();
		System.out.println("------ Escolha uma opção: ------");
		System.out.println();
		System.out.println("--.\t-----------.\t--------.\t");
		while (menu != 5) {
			System.out.println(
					"    1.Cadastrar Carro\n    2.Cadastrar Moto\n    3.Listar Carros\n    4.Listar Motos\n    5.Sair");
			System.out.println("--.\t-----------.\t--------.\t");
			menu = scan.nextInt();
			switch (menu) {
			case 1:
				CadastrarCarro();
				break;
			case 2:
				CadastrarMotos();
				break;
			case 3:
				ListarCarros();
				break;
			case 4:
				ListarMotos();
				break;
			case 5:
				System.out.println("Obrigada! Até mais.");
				break;
			default:
				System.out.println("Opção Invalida!");

			}

		}

	}

	private static void CadastrarMotos() throws ParseException {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite as informações: ");
		System.out.println("Cilindros\tPlaca\tAno.Modelo\tAno.Fabricação\tModelo\tMarca\tValor");
		Moto motos = new Moto(scan.nextInt(), scan.next(), scan.nextInt(), scan.nextInt(), scan.next(), scan.next(),
				scan.nextDouble());
		mot.add(motos);

	}

	private static void CadastrarCarro() {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite as informações: ");
		System.out.println("Tipo\tPassageiros\tPlaca\tAno.Modelo\tAno.Fabricação\tModelo\tMarca\tValor");
		Carro carros = new Carro(scan.next(), scan.nextInt(), scan.next(), scan.nextInt(), scan.nextInt(), scan.next(),
				scan.next(), scan.nextDouble());
		car.add(carros);

	}

	private static void ListarCarros() {
		System.out.println("Carros: \n");
		System.out.println("-----");
		for (Carro ca : car) {
			System.out.println("");
			System.out.println("Tipo\tPassageiros\tPlaca\tAno.Modelo\tAno.Fabricação\tModelo\tMarca\tValor");
			System.out.println(ca.toString());
			System.out.println();

		}
	}

	private static void ListarMotos() {
		System.out.println("Motos: \n");
		System.out.println("-----");
		for (Moto M : mot) {
			System.out.println("");
			System.out.println("Cilindros Placa\tAno.Modelo\tAno.Fabricação\tModelo\tMarca\tValor");
			System.out.println(M.toString());
			System.out.println();
		}

	}

}
