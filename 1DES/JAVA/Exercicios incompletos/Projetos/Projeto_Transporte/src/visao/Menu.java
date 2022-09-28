package visao;
import modelo.Veiculo;
import java.util.Scanner;
public class Menu {
	
private static Scanner scan = new Scanner(System.in);
private static int opcao = 0;
static String cadastrar [] = {"Cadastrar veiculos", "Listar veiculos", "Sair"};
static Veiculo[] veiculos = new Veiculo[10];
private static int qtdcadastro=0;


	public static void main(String[] args) {
		while(opcao!= 3) {
			System.out.println("Opções: ");
			opcao = menu(cadastrar);
			switch(opcao) {
 		
 		case 1:
 			cadastrarVeiculos();
 			break;
 		case 2:
 			listarVeiculos();
 			break;
 		case 3:
 			System.out.println("Obrigada. Adeus");
 			break;
 			default:
 				System.out.println("Opção Inválida.");
 		}
 		
 		
 	}
	}
	
 	private static void cadastrarVeiculos() {

 			System.out.println("Digite os dados do veiculo: ");
 			System.out.println("Placa\tMarca\tModelo\tAno Modelo\tAno da Fabricação\t Cor");
 			veiculos[qtdcadastro] = new Veiculo();
 			veiculos[qtdcadastro].placa = scan.next();
 			veiculos[qtdcadastro].marca = scan.next();
 			veiculos[qtdcadastro].modelo = scan.next();
 			veiculos[qtdcadastro].anoModelo = scan.nextInt();
 			veiculos[qtdcadastro].anoFabricacao = scan.nextInt();
 			veiculos[qtdcadastro].cor = scan.next();
 			qtdcadastro++;	
		}
 		
 		
 	
 	
 	private static void listarVeiculos() {
 		System.out.println("\nPlaca\tMarca\tModelo\tAno do Modelo\tAno da Fabricação\tCor");
 		for (int i = 0; i < qtdcadastro; i++) {
 			System.out.println(veiculos[i].paraString());
 			System.out.println();		
		}
 		
 	}
	


 	private static int menu(String[] itens) {
		System.out.println("\t._______________________.");
		for (int i = 0; i < itens.length; i++) {
			System.out.println("\t|" + (i + 1) + "." + itens[i] + "\t|");
		}
		System.out.println("\t:___Escolha uma opção___:");
		return scan.nextInt();
	}
	
}
