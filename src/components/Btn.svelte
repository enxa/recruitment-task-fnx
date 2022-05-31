<script>
  export let buttonText = ''
  export let backgroundColor = 'var(--color-mine-shaft)'
  export let textColor = '#fff'
  export let textTransform = 'uppercase'
</script>

<button on:click style="background: {backgroundColor}; color: {textColor}; text-transform: {textTransform}">{buttonText}</button>

<style>
  button {
    font-weight: 700;
    padding: 1.5rem 5rem;
    margin: 1rem 0;
    border-radius: 1rem;
    width: 100%;
    cursor: pointer;
  }
</style>