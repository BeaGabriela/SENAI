package src.visao;

import src.modelo.Funcionario;
import src.modelo.Cliente;
import src.modelo.Venda;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Scanner;

public class Menu {
	private static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	private static ArrayList<Funcionario> fun = new ArrayList<>();
	private static ArrayList<Cliente> cli = new ArrayList<>();
	private static ArrayList<Venda> ven = new ArrayList<>();

	public static void main(String[] args) throws ParseException {
		Scanner scan = new Scanner(System.in);
		int menu = 0;
		System.out.println();
		System.out.println("------ Escolha uma opção: ------");
		System.out.println();
		System.out.println("--.\t-----------.\t--------.\t");
		while (menu != 6) {
			System.out.println(
					"    1.Cadastrar Clientes\n    2.Cadastrar Funcioários\n    3.Cadastrar Vendas\n    4.Listar Funcionários\n    5.Listar Clientes\n    6.Listar Vendas\n    7.Sair");
			System.out.println("--.\t-----------.\t--------.\t");
			menu = scan.nextInt();
			switch (menu) {
			case 1:
				CadastrarCliente();
				break;
			case 2:
				CadastrarFuncionario();
				break;
			case 3:
				Vendas();
				break;
			case 4:
				ListarFuncionario();
				break;
			case 5:
				ListarCliente();
				break;
			case 6:
				ListarVendas();
				break;
			case 7:
				System.out.println("Obrigada! Até mais.");
				break;
			default:
				System.out.println("Opção Invalida!");

			}

		}

	}

	private static void ListarVendas() {
		System.out.println("Vendas: \n");
		System.out.println("---------");
		System.out.println("Código do cliente\tCódigo do funcionário\tValor\tValor+Comissão\tData");
		for (Venda v : ven) {
			System.out.println(v.toString());
			System.out.println();
		}

	}

	private static void Vendas() throws ParseException {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite as informações: ");
		System.out.println("Cód. do cliente\t\tCód. do funcionário\t\tValor\tComissão\tData");
		Venda vendas = new Venda(scan.next(), scan.next(), scan.nextInt(), scan.nextDouble(), df.parse(scan.next()));
		ven.add(vendas);
	}

	private static void ListarFuncionario() {
		System.out.println("Funcionários: \n");
		System.out.println("---------");
		for (Funcionario fu : fun) {
			System.out.println(fu.toString());
			System.out.println();
		}

	}

	private static void ListarCliente() {
		System.out.println("Clientes \n");
		System.out.println("-----");
		for (Cliente cl : cli) {
			System.out.println("");
			System.out.println(cl.toString());
			System.out.println();
		}
	}

	private static void CadastrarFuncionario() throws ParseException {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite as informações: ");
		System.out.println("Nome\tTelefone\tNascimento\tMatricula");
		Funcionario funcionarios = new Funcionario(scan.next(), scan.next(), df.parse(scan.next()), scan.nextInt(),
				scan.nextInt());
		fun.add(funcionarios);
	}

	private static void CadastrarCliente() throws ParseException {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite as informações: ");
		System.out.println("Nome\tTelefone\tNascimento\tId\tCrédito Limite)");
		Cliente clientes = new Cliente(scan.next(), scan.next(), df.parse(scan.next()), scan.nextInt(),
				scan.nextDouble());
		cli.add(clientes);

	}
}
