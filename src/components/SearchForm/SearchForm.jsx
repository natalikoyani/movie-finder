import { Input, Button, Form } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, value }) => {
    return (
            <Form onSubmit={(evt) => {
      evt.preventDefault();
      onSubmit(evt.currentTarget.elements.input.value);
    }}>
                <Input type="text" name="input" defaultValue={value} required></Input>
                <Button type="submit">Search</Button>
            </Form>
    )
}