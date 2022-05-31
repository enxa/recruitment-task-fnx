<script>
  import Btn from '$components/Btn.svelte'

  let name = 'Wprowadź swoje dane'

  let options = ['Wybierz dział...', 'Dział 1', 'Dział 2', 'Dział 3']
  let selectedOption

  let acceptation = false

  let text = 'Wprowadź treść'

  let submitForm = () => {
    console.log(name, selectedOption, acceptation, text)
  }
</script>

<section class="form">
  <h5>Kontakt</h5>
  <form on:submit|preventDefault>
    <div class="name">
      <label for="name">Imię i Nazwisko:</label>
      <input id="name" type="text" bind:value={name} on:click={() => name = ''}>
    </div>
    <div class="option">
      <label for="option">Wybierz dział:</label>
      <select id="option" bind:value={selectedOption}>
        {#each options as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </div>
    <div class="acceptation">
      <label for="acceptation">Kopia wiadomości:</label>
      <label class="checkbox-label">
        <input id="acceptation" type="checkbox" bind:checked={acceptation}>
        {#if acceptation}
          <div class="checkbox-acceptation">X</div>
        {/if}
        {#if !acceptation}
          <div class="checkbox-acceptation"></div>
        {/if}
        <span>Akceptuję regulamin</span>
      </label>
    </div>
    <div class="text">
      <label for="text">Treść:</label>
      <textarea id="text" bind:value={text} on:click={() => text = ''}></textarea>
    </div>
    <label for="submit" class="submit">
      <Btn buttonText="Wyślij" on:click={submitForm} />
    </label>
  </form>
</section>

<style>
  .form {
    padding: 3rem 0;
  }
    .form h5 {
      padding-bottom: 3rem;
      text-transform: uppercase;
    }
      .form div {
        padding: 1rem 0;
      }

      .form form input,
      .form form select,
      .form form textarea {
        padding: 1rem 2rem;
        margin: 1rem 0;
        width: 100%;
        border: 1px solid #C6C6C6;
        font-family: 'Titillium Web', sans-serif;
      }
      .form form .checkbox-label {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
        .form form .checkbox-label input, .checkbox-acceptation {
          width: 40px;
          height: 40px;
          visibility: hidden;
        }
          .form .checkbox-acceptation {
            transform: translateX(-40px);
            background: var(--color-concrete);
            border: 1px solid #C6C6C6;
            text-align: center;
            visibility: visible;
          }
          .form .option select {
            background: var(--color-concrete);
          }
      .form form textarea {
        height: 12rem;
      }

  @media (min-width: 1280px) {
    .form form {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 0 3rem;
    }
      .form form .name {
        grid-column: 1/4;
      }
      .form form .option {
        grid-column: 4/7;
      }
      .form form .acceptation {
        grid-column: 7/9;
      }
      .form form .text {
        grid-column: 1/7;
      }
      .form form .submit {
        grid-column: 7/9;
        align-self: center;
      }
  }
  
</style>