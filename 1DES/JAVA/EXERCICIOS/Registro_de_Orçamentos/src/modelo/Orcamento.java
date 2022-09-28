package modelo;

import java.awt.Color;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Currency;
import java.util.Locale;
import java.util.Objects;

import javax.swing.JTextPane;

import controllers.OrcamentoProcess;
import viewers.OrcamentoForm;

public class Orcamento {
	private int id;
	private String fornecedor;
	private String produto;
	private double preco;
	private boolean maisBarato;

	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	private static ArrayList<Orcamento>orcamento = new ArrayList<>();

	public Orcamento(int id, String fornecedor, String produto, double preco, boolean maisBarato) {
		this.id = id;
		this.fornecedor = fornecedor;
		this.produto = produto;
		this.preco = preco;
		this.maisBarato= maisBarato;
	}

	public Orcamento(int id) {
		this.id = id;
	}

	public Orcamento(String linha) {
		df.setCurrency(Currency.getInstance(BRASIL));
		this.id = Integer.parseInt(linha.split(";")[0]);
		this.fornecedor = linha.split(";")[1];
		this.produto = linha.split(";")[2];
		try {
			this.preco = Double.parseDouble(df.parse(linha.split(";")[3]).toString().replace(",", "."));
			this.maisBarato= Boolean.parseBoolean(linha.split(";")[4]);
		} catch (ParseException e) {
			System.out.println(e);
		}
	}

	public int getId() {
		return id;
	}
	
	public String getId(String s) {
		return String.format("%d", id);
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(String fornecedor) {
		this.fornecedor = fornecedor;
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public double getPreco() {
		return preco;
	}
	
	public String getPreco(String s) {
		return String.format("%.2f", preco);
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public boolean isMaisBarato() {
		return maisBarato;
	}
	
	public String isMaisBarato(String s) {
		return String.valueOf(maisBarato);
		
	}
	
	public void setMaisBarato(boolean maisBarato) {
		this.maisBarato = maisBarato;
	
	}

	@Override
	public int hashCode() {
		return Objects.hash(id );
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Orcamento other = (Orcamento) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return  id + "\t" + fornecedor + "\t" + produto + String.format("%.2f", preco) + "\t"
			 + comprar() ;
	}

	public String toCSV() {
		return  id + ";" + fornecedor + ";" + produto + ";" + preco
				+ ";" + maisBarato+"\r\n";
	}

	public String comprar() {
		if (maisBarato) {
			return "Barato";
		}
		return "Caro";
	}
	

	
	

}
