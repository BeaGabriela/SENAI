package visao;
import modelo.Gato;
import modelo.Cao;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	private static ArrayList<Cao> caes = new ArrayList <>();
	private static ArrayList<Gato> gatos = new ArrayList <>();
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int menu = 0;
		System.out.println();
		System.out.println("------ Escolha uma opção: ------");
		System.out.println();
		System.out.println("--.\t-----------.\t--------.\t");
		while (menu != 5) {
			System.out.println("    1.Cadastrar Gatos\n    2.Cadastrar Cão\n    3.Listar Gato\n    4.Listar Cãos\n    5.Sair");
			System.out.println("--.\t-----------.\t--------.\t");
			menu = scan.nextInt();
			switch (menu) {
			case 1:
				CadastrarGato();
				break;
			case 2:
				CadastrarCao();
				break;
			case 3:
				ListarGato();
			case 4:
				ListarCao();
				break;
			case 5:
				System.out.println("Obrigada! Até mais.");
				break;
			default:
				System.out.println("Opção Invalida!");

	}

}
	
	}


	private static void CadastrarGato() {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite as informações: ");
		System.out.println("Espécie\t Nome\tPeso\tRaça\tQtds Vidas");
		Gato gato = new Gato(scan.next(), scan.next(), scan.nextFloat(), scan.next(), scan.nextInt());
		gatos.add(gato);
	}
	private static void CadastrarCao() {
		Scanner scan = new Scanner(System.in);
		System.out.println("Digite as informações: ");		
		System.out.println("Espécie\t Nome\tPeso\tRaça\tQtds Motoqueiros Atacados");
		Cao cao = new Cao(scan.next(), scan.next(), scan.nextFloat(), scan.next(), scan.nextInt());
		caes.add(cao);
	
	}
	private static void ListarCao() {
		System.out.println("Cachorros: \n");
		System.out.println("-----");
	//Para cada Cao "c" em Caes Faça -- Sequencia do for.
		for (Cao c : caes) {
			System.out.println("Espécie\tNome\tPeso\tRaça\tQtds Motoqueiros Atacados");
			System.out.println(c.toString());
			System.out.println();
			
			
		}
		
		
	}
	private static void ListarGato() {
		System.out.println("Gatos: \n");
		System.out.println("---------");
		for (Gato g : gatos) {
			System.out.println(g.toString());
			System.out.println();
			
		}
		
	}
}
