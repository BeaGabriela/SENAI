package visao;

import java.util.Scanner;

import controle.ProcessaPlanilha;

public class Main {

	static Scanner scan = new Scanner(System.in);

	public static void main(String[] args) {
		ProcessaPlanilha.carregar();
		int menu = 0;
		while(menu!=5) {
			System.out.println("\nDigite a sua escolha: \n");
			System.out.println("1-Adição\n2-Multiplicação\n3-Subtração\n4-Divisão\n5-Sair");
			menu=scan.nextInt();
			
			ProcessaPlanilha.saida(menu);

			}
		}

	}


