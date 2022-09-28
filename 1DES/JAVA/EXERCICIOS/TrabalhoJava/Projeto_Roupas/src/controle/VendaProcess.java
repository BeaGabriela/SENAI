package controle;

import java.util.ArrayList;
import DAO.Dao;

import modelo.Venda;

public class VendaProcess {

	public static ArrayList<Venda> vendas = new ArrayList<>();
	private static Dao dao = new Dao();

	public static void abrir() {
		vendas = dao.ler();
		if (vendas.size() == 0) {
			vendas.add(
					new Venda(1, "Ana", "07/06/2022 08:07:51", "ryk", "Calça Jeans", "Feminina", 4, 4.0, 5.0, 15.20));
		}
	}

	public static void salvar() {
		dao.escrever(vendas);
	}

}
