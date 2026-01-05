import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('debe mostrar el valor inicial correctamente', () => {
    render(<SearchBar value="Rosa" onChange={() => {}} />);
    const input = screen.getByPlaceholderText(/Busca en nuestra tienda/i) as HTMLInputElement;
    expect(input.value).toBe('Rosa');
  });

  it('debe llamar a la función onChange cuando el usuario escribe', () => {
    const handleChange = vi.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText(/Busca en nuestra tienda/i);
    fireEvent.change(input, { target: { value: 'Orquídea' } });
    
    expect(handleChange).toHaveBeenCalledWith('Orquídea');
  });
});